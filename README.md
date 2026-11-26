# Refuse to Lose

Un ladrillo más. A team app for Jack, Leo and Michael.

- `index.html`: the phone app. HQ, daily bricks, the Legacy Wall and Spanish class.
- `laptop.html`: the laptop app. Everything, including Business HQ (leads, appointments, pipeline, production, clients, money, scoreboard, playbook) and funds.

## Install on a phone

- **iPhone:** open the link in Safari, tap Share, then Add to Home Screen.
- **Android:** open the link in Chrome, tap the menu, then Install app.

## How it works

- Plain HTML, CSS and JavaScript with no build step. `sw.js` caches the app so it works offline. `manifest.webmanifest` makes it installable.
- Data is saved in each device's browser storage (localStorage). Nothing is uploaded, and devices don't sync with each other yet.
- The Spanish brick can only be earned by finishing a lesson or practice session. It can't be ticked by hand in the phone app.
- Speaking exercises use the browser's speech recognition where it's available, and fall back to "type what you hear" where it isn't.

## Next steps

1. Shared data, so the team sees each other's bricks and business data (for example Supabase or Firebase, with sign-in for the three of you).
2. Profe, the AI Spanish teacher. It needs a server-side connection to an AI API, so the key is never exposed in the app.
3. Lock the Spanish brick in the laptop app too.
