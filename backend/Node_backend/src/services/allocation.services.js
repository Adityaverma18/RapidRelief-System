import { assignment } from "../models/assignment.model.js";
import { Incident } from "../models/incident.model.js";
import { User } from "../models/user.model.js";
import { callPythonService } from "./python.service.js";


// 🔹 optimized allocation
export const allocateRescueTeams = async (incidentId) => {
    try {
      // find incident
      const incident = await Incident.findById(incidentId);

      if (!incident) {
        throw new Error(
          "Incident not found"
        );
      }

      // find available rescue teams
      const rescues = await User.find({
          role: "RESCUE",
          status: "ACTIVE"
        });

      // filter valid locations
      const resources = rescues.filter(r =>
            r.location?.current?.lat &&
            r.location?.current?.lon
          ).map(r => ({
            id: r._id,
            lat: r.location.current.lat,
            lon: r.location.current.lon
          }));

      // payload for python service
      const payload = {
      severity: incident.severity,
      affected_population: incident.affectedPopulation,
      disaster_type: incident.disasterType,
      rainfall_mm: incident.rainfallMm,
      road_blockage_percent: incident.roadBlockagePercent,
      medical_need_level: incident.medicalNeedLevel,
      elderly_population: incident.elderlyPopulation,
      infrastructure_damage_level: incident.infrastructureDamageLevel,
      rescue_team_availability: availableRescueCount,
      area_size_km2: incident.areaSizeKm2,
      hospital_distance_km: incident.hospitalDistanceKm,
      response_time_target_min: incident.responseTimeTargetMin,
      location: [
        incident.location.lat,
        incident.location.lon
      ],
      resources
    };

      // call ML + KD-tree
      const result = await callPythonService( payload );

      const assignments = [];

      // create assignments
      for (const rescue of result.allocated) {
        const assignment = await assignment.create({
            incidentId: incident._id,
            rescueId: rescue.id
          });
        assignments.push(assignment);
      }

      // update incident
      incident.status = "ASSIGNED";
      await incident.save();
      return {
        teamsRequired: result.teams_required,
        assignments
        };
    } catch (error) {
      console.error("❌ Allocation Error");
      throw error;
    }
};