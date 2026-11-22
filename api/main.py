from pathlib import Path
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="TripSet rule engine", version="0.1.0")
DATA = json.loads((Path(__file__).parents[1] / "data" / "demo.json").read_text())
KNOWN = {item["id"] for item in DATA["equipment"]}

class AdaptRequest(BaseModel):
    equipment: list[str] = Field(min_length=1)

@app.get("/health")
def health(): return {"status": "ok"}

@app.post("/adapt")
def adapt(body: AdaptRequest):
    unknown = sorted(set(body.equipment) - KNOWN)
    if unknown: raise HTTPException(422, detail=f"Unknown equipment: {', '.join(unknown)}")
    results = []
    for move in DATA["workout"]:
        match = next((a for a in move["alternatives"] if set(a["equipment"]).issubset(body.equipment)), None)
        results.append({"id": move["id"], "original": move["name"], **(match or {"name":"Coach review required","scheme":"Do not improvise","why":f"No rule-approved {move['intent'].lower()} option for this equipment."}), "status":"matched" if match else "review"})
    return {"fixture":"fictional-demo", "results":results}
