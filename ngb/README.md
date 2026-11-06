# NGB: The Glazed Ring v2.4 — Body Control (PHATOM PMK)

Play the fight with your body: your hands are the gloves, your shoulders and hips are the fighter's.

## Put it online (camera needs https://)
1. On a computer: go to https://app.netlify.com/drop and drag **this whole folder** onto the page (or upload it to any static HTTPS host).
2. Open the https:// link it gives you in Safari or Chrome (its own tab — not inside Instagram/TikTok/chat previews).
3. Menu → **📷 BODY CONTROL** → START. Allow the camera.

Testing on the same computer instead: run `python3 -m http.server 8080` in this folder and open http://localhost:8080.

## Calibrate (about 10 seconds)
1. Step back until your head, both hands and hips are in the picture (2–3 m; phone at chest height, landscape, light in front of you).
2. Hands up in your guard — hold still for a second.
3. Jab with your LEFT hand, then throw your RIGHT. (If your camera is mirrored, the game notices and swaps hands for you.)

## What's in here
- `index.html` — the whole game (one file).
- `vendor/mediapipe-pose/` — Google's on-device body tracker (Apache-2.0), so nothing is fetched from another site. If this folder is missing, the game falls back to the same tracker from the jsDelivr CDN.
- Camera frames are processed on your device and never uploaded.
