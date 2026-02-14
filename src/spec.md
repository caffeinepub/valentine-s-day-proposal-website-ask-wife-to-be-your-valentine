# Specification

## Summary
**Goal:** Remove all decorative pig plushie imagery from the Valentine question screen while keeping the rest of the card intact.

**Planned changes:**
- Delete the five absolutely-positioned pig plushie `<img>` elements from `frontend/src/components/valentine/ValentineQuestionCard.tsx` so no pig images render on the Question view.
- Remove any remaining frontend code references to pig plushie asset filenames (`/assets/generated/pig-plushie-*.png`) to ensure they are not loaded anywhere.

**User-visible outcome:** The Question view shows the seal, heart bouquet, message text, and Yes/No buttons as before, but no pig plushie images appear anywhere on the screen.
