# Product plan

## ICP and JTBD
Frequent business travelers who pay a strength coach and train 3+ times weekly. When a hotel gym lacks programmed equipment, help them complete the intended session safely without guessing or waiting for a coach reply.

## MVP
Inventory confirmation, prescribed-session import, deterministic coach-rule matching, explicit “coach review required” stops, approve/reject feedback, and a shareable change summary. Exclude autonomous prescription, rehab, medical recommendations, billing, and real computer vision until observed demand.

## Data model
`Traveler`, `Trip`, `EquipmentInventory`, `Program`, `ExerciseIntent`, `SubstitutionRule`, `AdaptedSession`, `CoachReview`, and `Outcome`. Every adapted movement retains its source, rule version, rationale and approval state.

## Architecture and AI strategy
Next.js static UI hosts the acquisition/demo flow; FastAPI owns validation and rule execution. A later vision model may propose equipment labels, but users confirm them. An LLM may explain a selected rule but cannot create a substitute outside the coach-approved graph. Log rule versions and overrides; never train on private programs without consent.

## Economics
Start at $29/trip with a free single-session decoder. At an assumed 70% gross margin after support/insurance, 100 monthly trips contribute roughly $2,030 before acquisition. The report's $9.99 subscription risks seasonal churn; test it only after repeat trips. Coach flat plans become viable when one coach routes 5+ adaptations/month.

## Validation and moat
Run 10 moderated upcoming-trip sessions and request prepayment. Primary measures: adaptation completion, coach interruption avoided, unsafe/rejected rate, and $29 conversion. The potential moat is a growing, permissioned corpus of coach-approved intent/equipment mappings and override outcomes—not image recognition.

## Risks
Exercise injury/liability; incumbents bundle the feature; weak retention between trips; program-import friction; incorrect inventory; coach distrust; and SEO dependence. Mitigate with hard stops, explicit scope, versioned rules, coach review and professional legal/insurance review before real users.

## 30/60/90
- **30 days:** concierge 10 trips, validate prepay, measure review rate, secure two coach design partners.
- **60 days:** import one common program format, coach rule editor, hotel inventory history, 20 indexed decoder pages.
- **90 days:** test $9.99 repeat plan and $19 coach roster tier; continue only with ≥10 paid trips, <10% unsafe/rejected suggestions, and ≥30% second-trip intent.
