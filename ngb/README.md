# NGB: The Glazed Ring v2.7 — Sweet Science + Body Control (PHATOM PMK)

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

## v2.5 — feet, Body Camp, feel tuning
- Feet from your body (when your knees and ankles are in the picture):
  - lengthen your stance = rear foot scoots back (A);
  - bring your right foot up = B;
  - turn clockwise on your planted left foot = pivot (X);
  - turn counter-clockwise on your planted right foot = pivot (Y);
  - put the other foot in front = switch stance.
  A controller's A/B/X/Y still work too. Squaring back up to the camera is never counted as a pivot.
- Training Camp turns into **Body Camp** when body control is on. Its cues: guard, jab, hook, uppercut, body shot, overhand, feint, leave it out, slip, duck, lean back, hip power, clinch, one-hand release, plus feet if they're in view.
- Feel settings in the BODY panel:
  - REACH: how far your punches carry;
  - TRIGGER: easy / normal / firm — how hard you have to throw;
  - FEEL: smooth / normal / snappy;
  - LAB: a live readout of what the tracker sees, with frame timing.

## v2.6 — any camera angle, more natural arms
- Film yourself however you train: phone in front, or off to the side like your bag videos (portrait is fine). The two calibration punches tell the game which way you face, and "forward" follows your hips as you move around.
- Tuned on real bag-work footage: jabs, crosses and hooks read correctly from a side-on, tilted phone.
- Arms: the shoulder rolls up and forward on long punches, the elbow line is steadier, held guards stay calm, and fast hands stay instant.

## v2.7 — Sweet Science
- **Damage:**
  - Clean head shots swell the side they land on; hard ones can open cuts, and blood runs into that eye. Your screen closes on that side, and shots from the blind side land harder.
  - Straights hurt the nose; uppercuts hurt the jaw and can knock the mouthpiece out.
- **Body shots:**
  - Lead-hand hook to the body = liver shot: a beat later the legs can fold.
  - Straight to the body = solar plexus: the wind goes out.
- **Ring craft:**
  - Rolling with a hook takes the sting out.
  - A pull-counter straight lands harder, and so does a punch your opponent walks onto.
  - Doubled and tripled jabs land a little heavier.
  - Overhands to the skull and body shots into an elbow can hurt your hand.
- **Between rounds:** 60 s on the stool. Spend it on Enswell, adrenaline, Vaseline, ice, breathing or the mouthpiece, or throw in the towel.
- **Officials:** a bad cut brings the doctor (and can stop the fight). Open scoring is announced after rounds 4 and 8, and a 10-second clapper sounds near the end of each round.
- **RULES** (menu): Modern 10 oz · 1920s 5 oz horsehair · Bare knuckle.
