# 2. COLMAP feldolgozás (kamera pozíciók meghatározása)

A következő lépés a képkockák feldolgozása COLMAP segítségével.

A COLMAP egy Structure-from-Motion (SfM) alapú eszköz, amely képekből képes meghatározni a kamera pozíciókat és egy ritka pontfelhőt generálni.

## Használt folyamat

A feldolgozás során a következő fő lépések történnek:

- Feature extraction (jellegzetes pontok keresése)
- Feature matching (képek közötti megfeleltetés)
- Sparse reconstruction (ritka pontfelhő létrehozása)

## Megjegyzés

A dolgozat során megfigyelhető volt, hogy a homogén felületek (pl. fehér falak) esetében a feature detection nehezebbé válik, ami rontja a rekonstrukció minőségét.

Ezzel szemben a textúrált, élekkel rendelkező objektumok (pl. bútorok, könyvek) jelentősen javítják az eredményt.
