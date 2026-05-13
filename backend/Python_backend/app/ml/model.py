import joblib
import os

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "resource_model.pkl"
)


# 🔹 load trained model
model = joblib.load(MODEL_PATH)