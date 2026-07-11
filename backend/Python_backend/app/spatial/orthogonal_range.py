import math


def create_search_rectangle(latitude, longitude, radius_km):
    """
    Creates a rectangular search boundary around a given location.

    The rectangle is computed from a center point (latitude, longitude)
    and a search radius (in kilometers). This bounding box is later used
    for orthogonal range searching to quickly filter resources that lie
    within the search area.

    Parameters:
        latitude (float): Latitude of the center location.
        longitude (float): Longitude of the center location.
        radius_km (float): Search radius in kilometers.

    Returns:
        tuple:
            (min_lat, max_lat, min_lon, max_lon)
            representing the rectangular search boundary.
    """

    # Convert the search radius from kilometers to degrees of latitude.
    # Approximately 1 degree of latitude = 111 km anywhere on Earth.
    lat_delta = radius_km / 111

    # Convert the search radius from kilometers to degrees of longitude.
    # Longitude degrees become smaller toward the poles, so we divide by cos(latitude) to compensate for Earth's curvature.
    lon_delta = radius_km / (
        111 * math.cos(math.radians(latitude))
    )

    return (
        latitude - lat_delta,
        latitude + lat_delta,
        longitude - lon_delta,
        longitude + lon_delta,
    )

def orthogonal_range_search(resources, min_lat, max_lat, min_lon, max_lon):
    """
    Performs Orthogonal Range Searching on a collection of resources.

    It checks every resource and returns only those whose latitude and
    longitude lie within the rectangular search boundary.

    Parameters:
        resources (list): List of resource dictionaries containing
                          'lat' and 'lon' coordinates.
        min_lat (float): Southern boundary of the search rectangle.
        max_lat (float): Northern boundary of the search rectangle.
        min_lon (float): Western boundary of the search rectangle.
        max_lon (float): Eastern boundary of the search rectangle.

    Returns:
        list: Resources located inside the search rectangle.
    """

    # Store all resources that satisfy the search conditions.
    result = []

    # Check each resource one by one.
    for resource in resources:

        # A resource is selected only if:
        # - Its latitude lies between min_lat and max_lat.
        # - Its longitude lies between min_lon and max_lon.
        if (
            min_lat <= resource["lat"] <= max_lat
            and
            min_lon <= resource["lon"] <= max_lon
        ):
            result.append(resource)

    print("Resources inside rectangle:")

    for resource in result:
        print(resource["id"])

    # Return all matching resources.
    return result


def calculate_search_radius(severity, affected_population, teams_required):
    """
    Dynamically calculates the search radius based on disaster conditions.

    The radius increases as the disaster becomes more severe, affects
    more people, or requires additional rescue teams. A maximum limit
    of 50 km is applied to avoid unnecessarily large search areas.

    Parameters:
        severity (int/float): Disaster severity level.
        affected_population (int): Number of affected people.
        teams_required (int): Estimated rescue teams required.

    Returns:
        float: Search radius in kilometers.
    """

    # Start with a minimum search radius of 2 km.
    radius = 2

    # Increase radius according to disaster severity.
    radius += severity * 2

    # Increase radius as the affected population grows.
    # Every 1000 affected people adds 1 km.
    radius += affected_population / 1000

    # Increase radius based on the number of rescue teams needed.
    radius += teams_required

    # Limit the maximum search radius to 50 km.
    return min(radius, 50)