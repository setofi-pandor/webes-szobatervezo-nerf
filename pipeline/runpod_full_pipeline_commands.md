# RunPod teljes pipeline parancsok

Ez a rész a dolgozat során használt RunPod alapú feldolgozási folyamat parancsait tartalmazza a környezet előkészítésétől a NeRF tanításig.

```bash
# 1. Projektmappa létrehozása
mkdir -p /workspace/project
cd /workspace/project

# 2. Instant-NGP letöltése
git clone --recursive https://github.com/NVlabs/instant-ngp.git
cd instant-ngp

# 3. Szükséges csomagok telepítése
apt update
apt install -y ffmpeg colmap cmake build-essential git

pip install opencv-python-headless numpy scipy imageio tqdm commentjson

# 4. Instant-NGP build
cmake . -B build
cmake --build build --config RelWithDebInfo -j

# 5. Dataset mappa
cd /workspace/project
mkdir -p datasets/room_test

# (ide kerül a videó pl:)
# /workspace/project/datasets/room_test/input_video.MOV

# 6. Videó feldolgozás + COLMAP
QT_QPA_PLATFORM=offscreen python3 instant-ngp/scripts/colmap2nerf.py \
  --video_in datasets/room_test/input_video.MOV \
  --video_fps 5 \
  --run_colmap \
  --aabb_scale 32

# 7. Gyors tanítás
python3 instant-ngp/scripts/run.py \
  --scene datasets/room_test/transforms.json \
  --n_steps 20000 \
  --save_snapshot datasets/room_test/room_snapshot.msgpack

# 8. Hosszabb tanítás
python3 instant-ngp/scripts/run.py \
  --scene datasets/room_test/transforms.json \
  --n_steps 50000 \
  --save_snapshot datasets/room_test/room_snapshot_50k.msgpack

python3 instant-ngp/scripts/run.py \
  --scene datasets/room_test/transforms.json \
  --n_steps 100000 \
  --save_snapshot datasets/room_test/room_snapshot_100k.msgpack

# 9. Render kép készítés
python3 instant-ngp/scripts/run.py \
  --scene datasets/room_test/transforms.json \
  --load_snapshot datasets/room_test/room_snapshot.msgpack \
  --screenshot_transforms datasets/room_test/transforms.json \
  --screenshot_dir datasets/room_test/renders

## Megjegyzések
A parancsok a dolgozat során használt feldolgozási folyamatot szemléltetik.

Az útvonalak és fájlnevek az adott datasetnek megfelelően módosíthatók. A tényleges kísérletek során több különböző jelenet (például folyosó, konyha, szoba) került feldolgozásra.
