# 4. NeRF tanítás (Instant-NGP)

A konvertált adatok (transforms.json) alapján a következő lépés a neurális rekonstrukció, amely az Instant-NGP segítségével történik.

Az Instant-NGP egy hatékony NeRF implementáció, amely képes gyorsan háromdimenziós jeleneteket tanulni a rendelkezésre álló képekből.

## Példa parancs

```bash
python3 scripts/run.py \
  --scene transforms.json \
  --n_steps 35000 \
  --save_snapshot snapshot.msgpack

## Kimenet
A tanítás során többféle eredmény is keletkezik:

neurális modell (snapshot.msgpack)
renderelt képek
vizuális visszajelzés a tanulási folyamatról

## Megjegyzés
A tanítási lépések száma (n_steps) jelentős hatással van az eredmény minőségére.

A dolgozat során kisebb iterációszámok (pl. 20 000) gyors visszajelzésre szolgáltak, míg a magasabb értékek (50 000–100 000) részletesebb rekonstrukciót eredményeztek.

Fontos tapasztalat volt, hogy ha a modell már alacsony iterációszámnál sem mutat értelmezhető struktúrát, akkor a további tanítás sem vezet jelentős javuláshoz.
