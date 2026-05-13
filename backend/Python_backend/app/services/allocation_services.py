from ml.predictor import (predict_resources)
from spatial.kd_tree import (find_nearest_resources)
from spatial.geo_utils import (is_valid_coordinate)


def allocate_resources(data):
    """
    Main allocation pipeline
    """
    # 🔹 extract input
    severity = data.severity

    population = data.population

    location = data.location

    resources = [
        r.dict()
        for r in data.resources
    ]


    # 🔹 validate incident location
    incident_lat = location[0]
    incident_lon = location[1]

    if not is_valid_coordinate(incident_lat,incident_lon):
        raise ValueError(
            "Invalid incident coordinates"
        )


    # 🔹 filter valid rescue locations
    valid_resources = []

    for resource in resources:

        lat = resource["lat"]
        lon = resource["lon"]

        if is_valid_coordinate(lat, lon):
            valid_resources.append(resource )


    # 🔹 no rescue available
    if not valid_resources:

        return {
            "teams_required": 0,
            "allocated": [],
            "message": "No valid rescue resources available"
        }

    # 🔹 ML prediction
    teams_required = predict_resources( data )

    # 🔹 KD-tree nearest allocation
    nearest_resources = find_nearest_resources(valid_resources, location, teams_required)

    # 🔹 response
    return {
        "teams_required": teams_required,
        "allocated": nearest_resources,
        "message": "Allocation successful"
    }