# Rekonstrukciós pipeline

Ez a mappa a szakdolgozat során használt feldolgozási folyamat lépéseit tartalmazza.

A pipeline célja, hogy egy videófelvételből kiindulva háromdimenziós rekonstrukciót hozzon létre NeRF alapú módszerrel.

---

## A pipeline fő lépései

1. Képkockák kinyerése videóból (FFmpeg)
2. Kamera pozíciók meghatározása (COLMAP)
3. Adatok konvertálása NeRF formátumba (colmap2nerf.py)
4. NeRF tanítás (Instant-NGP)
5. Renderelés és eredmények ellenőrzése

---

## Fájlok a mappában

- `00_full_pipeline.md` – a teljes folyamat áttekintése
- `01_frame_extraction.md` – képkockák kinyerése
- `02_colmap_processing.md` – COLMAP feldolgozás
- `03_colmap_to_nerf.md` – NeRF konverzió
- `04_instant_ngp_training.md` – modell tanítás
- `05_rendering_and_snapshot.md` – renderelés és snapshot kezelés
- `runpod_full_pipeline_commands.md` – a RunPod környezetben használt konkrét parancsok

---

## Megjegyzés

A pipeline a dolgozat során használt megközelítést követi, azonban a konkrét útvonalak és fájlnevek a futtatási környezet függvényében módosíthatók.

A mappában található fájlok célja a feldolgozási folyamat lépéseinek átlátható bemutatása és reprodukálhatóságának segítése.
