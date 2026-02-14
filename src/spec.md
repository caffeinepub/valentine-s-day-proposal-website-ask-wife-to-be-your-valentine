# Specification

## Summary
**Goal:** Replace the decorative pig plushies on the Valentine question card with 5 visually different, user-provided pig images, all placed only in the top area of the card.

**Planned changes:**
- Add 5 user-provided pig images as static assets under `frontend/public/assets/generated` (including local copies sourced from the two provided external URLs).
- Update `frontend/src/components/valentine/ValentineQuestionCard.tsx` to render exactly 5 decorative pig plushies, all positioned in the top area of the card (none at the bottom).
- Remove any usage of `/assets/generated/pig-plushie.dim_256x256.png` from the decorative pig elements and ensure the 5 displayed pigs are visually different (deduplicate identical uploads).

**User-visible outcome:** The Valentine question card shows five different pig plushie decorations clustered at the top of the card, with the rest of the UI (text, buttons, seal, bouquet) unchanged.
