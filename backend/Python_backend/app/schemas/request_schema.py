from pydantic import BaseModel,Field
from typing import List

class Resource(BaseModel):
    id: str
    lat: float
    lon: float


class AllocationRequest(BaseModel):
    severity: int = Field(
        ...,
        ge=1,
        le=10
    )
    affected_population: int
    disaster_type: str
    rainfall_mm: float
    road_blockage_percent: float
    medical_need_level: int
    elderly_population: int
    infrastructure_damage_level: int
    rescue_team_availability: int
    area_size_km2: float
    hospital_distance_km: float
    response_time_target_min: int
    location: List[float]
    resources: List[Resource]