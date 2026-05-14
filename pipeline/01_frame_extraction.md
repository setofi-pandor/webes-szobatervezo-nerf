# 1. Frame extraction (képkockák kinyerése)

A rekonstrukció első lépése a videófájl képkockákra bontása.

Ehhez az FFmpeg eszköz került felhasználásra, amely lehetővé teszi a videó meghatározott FPS érték melletti feldolgozását.

## Példa parancs

```bash
ffmpeg -i input_video.mp4 -vf fps=5 output_%04d.png
