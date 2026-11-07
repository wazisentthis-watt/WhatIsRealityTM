# NGB: The Glazed Ring v2.8 — Body Sync + Body Control (PHATOM PMK)

Play the fight with your body: your hands are the gloves, your shoulders and hips are the fighter's.

## Put it online (camera needs https://)
1. On a computer: go to https://app.netlify.com/drop and drag **this whole folder** onto the page (or upload it to any static HTTPS host).
2. Open the https:// link it gives you in Safari or Chrome (its own tab — not inside Instagram/TikTok/chat previews).
3. Menu → **📷 BODY CONTROL** → START. Allow the camera.

Testing on the same computer instead: run `python3 -m http.server 8080` in this folder and open http://localhost:8080.

## First time: BODY SYNC (about 3 minutes)
Menu → **📷 BODY SYNC**. The fighter shows each move, then you do it:
1. Get in the picture — head, both gloves, hips **and feet** (2–3 m back, phone at chest height, landscape, light in front of you).
2. Guard up, hold still. Then ONE straight punch with your **LEFT** hand (this tells the game if your camera flips the picture).
3. Jab ×3, cross ×3, lead hook ×3, rear hook ×3, lead uppercut ×3, rear uppercut ×3, body shots ×3 each side.
4. Body guard (elbows over the ribs), slip left/right, duck, lean back — twice each.
5. Switch to your other stance and hold, then switch back.
You get speed, reach and "back to the chin" feedback on every rep, and a summary at the end. The game saves how YOU throw each punch and uses it from then on. **DOWNLOAD MY SYNC DATA** saves a file you can send over for tuning.

Quick start without syncing: 📷 BODY CONTROL → START → guard up → left jab → right jab.

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

## v2.8 — Body Sync (the game learns you)
- **Body Sync tutorial** (menu card, or BODY panel → BODY SYNC): 18 short steps, 3 reps per punch per side, with a demo and a coaching tip for each. It records your own punch paths and classifies your punches against them first (falls back to the general boxing rules if you haven't synced).
- **Your trigger speed and reach** come from your real reps, so soft-but-real punches register and shadow-flinches don't.
- **Guard, per hand:** face guard ■ vs body guard ▼, shown on the BODY chip (e.g. `L■ R▼`) and in the game.
- **Stance from your feet**, both ways: put the other foot in front and the fighter switches orthodox ⇄ southpaw. Sync learns both of your stances (and your hip angle in each).
- **Lower latency:** the tracker runs on every new camera frame the moment it exists (no waiting for the screen refresh), MediaPipe's own smoothing is off (our filter is lighter on the arms), and the glove follows your hand with a short look-ahead. In tests the game glove starts moving one camera frame after your hand does.
- **Direct mapping table** in the BODY panel: every body movement and the game action it triggers.
