from fastapi import (APIRouter, HTTPException)
from schemas.request_schema import (AllocationRequest)
from services.allocation_services import (allocate_resources)

# 🔹 router
router = APIRouter()

# 🔹 allocation endpoint
@router.post("/allocate")
def allocate(data: AllocationRequest):
    """
    ML + KD-tree allocation endpoint
    """
    try:
        result = allocate_resources(data)
        return {
            "success": True,
            "data": result
        }
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )