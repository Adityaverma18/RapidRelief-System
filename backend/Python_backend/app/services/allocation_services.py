from app.ml.predictor import predict_resources
from app.spatial.geo_utils import is_valid_coordinate
from app.spatial.orthogonal_range import (
    calculate_search_radius,
    create_search_rectangle,
    orthogonal_range_search,
)


def allocate_resources(data):
    location = data.location
    resources = [r.model_dump() for r in data.resources]

    incident_lat = location[0]
    incident_lon = location[1]

    if not is_valid_coordinate(incident_lat, incident_lon):
        raise ValueError("Invalid incident coordinates")

    valid_resources = [
        resource
        for resource in resources
        if is_valid_coordinate(resource["lat"], resource["lon"])
    ]

    predictions = predict_resources(data)

    teams_required = predictions["teams_required"]

    if not valid_resources:
        return {
            "teams_required": predictions["teams_required"],
            "ambulances_required": predictions["ambulances_required"],
            "food_packets_required": predictions["food_packets_required"],
            "medical_kits_required": predictions["medical_kits_required"],
            "allocated": [],
            "message": "No valid rescue resources available",
        }

    # ---------- Dynamic Search Radius ----------
    radius = calculate_search_radius(
        data.severity,
        data.affected_population,
        teams_required,
    )

    # ---------- Dynamic Rectangle ----------
    min_lat, max_lat, min_lon, max_lon = create_search_rectangle(
        incident_lat,
        incident_lon,
        radius,
    )

    # ---------- Orthogonal Range Search ----------
    allocated = orthogonal_range_search(
        valid_resources,
        min_lat,
        max_lat,
        min_lon,
        max_lon,
    )

    # Limit to required teams
    allocated = allocated[:teams_required]

    return {
        "teams_required": predictions["teams_required"],
        "ambulances_required": predictions["ambulances_required"],
        "food_packets_required": predictions["food_packets_required"],
        "medical_kits_required": predictions["medical_kits_required"],
        "allocated": allocated,
        "search_radius_km": radius,
        "search_rectangle": {
            "min_lat": min_lat,
            "max_lat": max_lat,
            "min_lon": min_lon,
            "max_lon": max_lon,
        },
        "message": "Allocation successful",
    }


def find_nearby_centers(location, centers, limit=5):

    resources = [
        {
            "id": center["id"],
            "lat": center["lat"],
            "lon": center["lon"],
            "name": center.get("name", ""),
            "type": center.get("type", ""),
        }
        for center in centers
        if is_valid_coordinate(center["lat"], center["lon"])
    ]

    if not resources:
        return []

    # Fixed radius for nearby center search
    radius = 10

    min_lat, max_lat, min_lon, max_lon = create_search_rectangle(
        location[0],
        location[1],
        radius,
    )

    nearby = orthogonal_range_search(
        resources,
        min_lat,
        max_lat,
        min_lon,
        max_lon,
    )

    return nearby[:limit]