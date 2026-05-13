from fastapi import FastAPI
from app.routes.allocation import (router as allocation_router)

# 🔹 create app
app = FastAPI(
    title="Disaster Management ML Service",
    description="ML + KD-tree optimization service",
    version="1.0.0"
)

# 🔹 register routes
app.include_router(allocation_router)

# 🔹 health check route
@app.get("/")
def home():
    return {
        "success": True,
        "message": "Python ML Service Running"
    }

# 🔹 health endpoint
@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }