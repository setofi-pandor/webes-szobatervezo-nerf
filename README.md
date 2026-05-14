# Webes szobatervező NeRF-alapú rekonstrukcióval

Ez a repository a szakdolgozathoz tartozó gyakorlati megvalósítás főbb elemeit tartalmazza.

A projekt célja egy olyan rendszer bemutatása, amely videófelvételek alapján képes beltéri terek háromdimenziós rekonstrukciójára, majd az eredmények webes megjelenítésére.

---

## A projekt felépítése

A rendszer több egymásra épülő komponensből áll:

- Frontend (HTML, JavaScript, Three.js)
- Backend (Node.js, Express)
- Rekonstrukciós pipeline (FFmpeg, COLMAP, Instant-NGP)

---

## Mappastruktúra

- `frontend/` – webes felület
- `backend/` – szerveroldali logika
- `pipeline/` – rekonstrukciós folyamat lépései dokumentálva

---

## Rekonstrukciós folyamat

A pipeline fő lépései:

1. Videó képkockákra bontása (FFmpeg)
2. Kamera pozíciók meghatározása (COLMAP)
3. Adatok konvertálása NeRF formátumba (colmap2nerf.py)
4. NeRF tanítás (Instant-NGP)
5. Renderelés és eredmények ellenőrzése

A részletes lépések a `pipeline/` mappában találhatók.

---

## Használt technológiák

- FFmpeg
- COLMAP
- Instant-NGP
- Three.js
- Node.js
- Express

---

## Megjegyzés

A repository nem tartalmaz nagy méretű fájlokat, például videókat, képkockákat, snapshot fájlokat vagy mesh exportokat.

Ezek méretük miatt nem alkalmasak GitHubon történő tárolásra, azonban a szükséges parancsok és lépések dokumentálva vannak a reprodukálhatóság érdekében.

---

## Cél

A repository célja nem egy kész termék biztosítása, hanem a szakdolgozatban bemutatott megvalósítás és gondolkodási folyamat kiegészítése, valamint a rendszer felépítésének átlátható bemutatása.
