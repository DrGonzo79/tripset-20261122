from fastapi.testclient import TestClient
from main import app
client=TestClient(app)
def test_health(): assert client.get("/health").json()=={"status":"ok"}
def test_adapts_with_shared_fixture():
    response=client.post("/adapt",json={"equipment":["dumbbell","smith","cable","bench"]})
    assert response.status_code==200
    assert [x["status"] for x in response.json()["results"]]==["matched","matched","matched"]
def test_stops_when_rule_is_missing():
    data=client.post("/adapt",json={"equipment":["band"]}).json()
    assert all(x["status"]=="review" for x in data["results"])
def test_rejects_empty_and_unknown_equipment():
    assert client.post("/adapt",json={"equipment":[]}).status_code==422
    assert client.post("/adapt",json={"equipment":["teleporter"]}).status_code==422
