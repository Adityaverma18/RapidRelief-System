import pandas as pd
from ml.model import model


def predict_resources(data):
    """
    Predict disaster resources
    """

    input_df = pd.DataFrame([{
        "severity": data.severity,
        "affected_population": data.affected_population,
        "disaster_type": data.disaster_type,
        "rainfall_mm": data.rainfall_mm,
        "road_blockage_percent": data.road_blockage_percent,
        "medical_need_level": data.medical_need_level,
        "elderly_population": data.elderly_population,
        "infrastructure_damage_level": data.infrastructure_damage_level,
        "rescue_team_availability": data.rescue_team_availability,
        "area_size_km2": data.area_size_km2,
        "hospital_distance_km": data.hospital_distance_km,
        "response_time_target_min": data.response_time_target_min
    }])

    prediction = model.predict(input_df)[0]

    return {
        "teams_required": int(round(prediction[0])), 
        "ambulances_required": int(round(prediction[1])),
        "food_packets_required": int(round(prediction[2])),
        "medical_kits_required": int(round(prediction[3]))
    }