# Architecture

`data/demo.json` is the explicit shared fixture. The static Next.js client and FastAPI rule engine both consume it. `lib/adapt.ts` mirrors the backend operation so GitHub Pages remains interactive without pretending the API is deployed.

The production boundary is: confirmed inventory → versioned substitution graph → deterministic match → coach escalation. Vision only suggests inventory; language models only explain existing matches. Store audit events for input inventory, rule version, result, approval, rejection, override and error. Monitor review rate, override rate, adaptation latency and rule-specific rejection spikes.

Failure defaults are safe: missing equipment yields validation errors; no approved rule yields “coach review required”; API absence leaves the demo-local rule engine available and clearly labeled. Authentication, encryption, retention controls and professional safety review are prerequisites for real client programs.
