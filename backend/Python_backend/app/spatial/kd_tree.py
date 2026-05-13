from scipy.spatial import KDTree


def build_tree(resources):
    """
    Build KD-tree from rescue resources
    """

    if not resources:
        return None, []

    # coordinate points
    points = [
        (r["lat"],r["lon"])
        for r in resources
    ]

    # build tree
    tree = KDTree(points)
    return tree, points


def find_nearest_resources(resources, target_location, k=1):
    """
    Find nearest rescue teams
    """
    if not resources:
        return []

    # build tree
    tree, _ = build_tree(resources)

    # prevent overflow
    k = min(k, len(resources))

    # query nearest
    distances, indexes = tree.query(target_location, k=k)

    # single result handling
    if isinstance(indexes, int):
        indexes = [indexes]

    nearest = [
        resources[i]
        for i in indexes
    ]

    return nearest