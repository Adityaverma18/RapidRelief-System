import math

# 🔹 degree → radians
def to_radians(degree):
    return degree * (math.pi / 180)

# 🔹 haversine distance
def haversine_distance(lat1, lon1, lat2, lon2):
    """
    Calculate distance in KM
    """
    EARTH_RADIUS = 6371
    d_lat = to_radians(lat2 - lat1)

    d_lon = to_radians(lon2 - lon1)

    a = (math.sin(d_lat / 2) ** 2 + math.cos(to_radians(lat1)) * math.cos(to_radians(lat2)) * math.sin(d_lon / 2) ** 2)

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    return EARTH_RADIUS * c


# 🔹 validate coordinates
def is_valid_coordinate(lat, lon):
    return (-90 <= lat <= 90 and -180 <= lon <= 180)