# 3. COLMAP → NeRF konverzió

A COLMAP által generált kameraadatok nem közvetlenül használhatók a NeRF modell számára, ezért szükséges azok konvertálása.

Ehhez az Instant-NGP repository-ban található `colmap2nerf.py` script került felhasználásra.

## Példa parancs

```bash
python3 scripts/colmap2nerf.py \
  --video_in input_video.mp4 \
  --video_fps 5 \
  --run_colmap \
  --aabb_scale 32

## Kimenet

A folyamat eredményeként létrejön egy transforms.json fájl, amely tartalmazza:

a kamera pozíciókat
a képek elérési útját
a szükséges metaadatokat

## Megjegyzés
Az aabb_scale paraméter különösen fontos szerepet játszik a jelenet méretének kezelésében. A dolgozat során több érték is kipróbálásra került (pl. 16 és 32), és megfigyelhető volt, hogy nagyobb terek esetén a magasabb érték stabilabb eredményt adott.
