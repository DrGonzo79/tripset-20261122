# TripSet

TripSet is a runnable prototype of “travel mode” for coached strength programs. A traveler confirms hotel equipment, then a deterministic rule engine adapts the prescribed session while preserving movement intent. If no coach-approved option fits, it stops for review.

> Demo only: all people and trip details are fictional. Photo recognition is simulated. This is not medical advice or an autonomous exercise prescription.

## What works

- Toggle the confirmed hotel equipment inventory.
- Generate three rule-checked substitutions from shared fixtures.
- See safe failure states when equipment cannot satisfy a rule.
- Approve individual matches; validation, empty and review states are implemented.
- Run the same real operation through FastAPI at `POST /adapt`.

## Run

Requires Node 24.22.3 and Python 3.12+.

```bash
npm ci
npm run dev
uv sync --directory api --frozen
uv run --directory api uvicorn main:app --reload
```

## Verify

```bash
npm run typecheck
npm audit --audit-level=high
npm run test:e2e
npm run build
uv run --directory api pytest
uv run --directory api pip-audit
```

The GitHub Pages deployment is frontend-only. The FastAPI backend is runnable and tested source, **not deployed**.

## Source and decisions

- [Research notes](research/notes.md)
- [Office Hours diagnostic](docs/OFFICE_HOURS.md)
- [Product plan](docs/PRODUCT.md)
- [CEO review](docs/CEO_REVIEW.md)
- [Opportunity score](docs/OPPORTUNITY_SCORE.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Build prompts](docs/BUILD_PROMPTS.md)

Derived analysis of the free IdeaBrowser report dated November 22, 2026. No raw newsletter or private tracking data is included.
