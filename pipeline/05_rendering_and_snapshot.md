# 5. Renderelés és snapshot kezelés

A tanítás után lehetőség van a rekonstruált jelenet vizuális ellenőrzésére és mentésére.

Ez két fő módon történt a dolgozat során:

- renderelt képek készítése
- snapshot fájlok mentése és újratöltése

## Renderelés

A renderelés lehetővé teszi, hogy a modell által generált képeket különböző nézőpontokból vizsgáljuk meg.

Ez gyors visszajelzést ad arról, hogy a rekonstrukció mennyire pontos.

## Snapshot

A snapshot fájl (.msgpack) a modell aktuális állapotát menti el.

Ez lehetővé teszi:

- a tanítás megszakítását
- a folyamat későbbi folytatását
- különböző iterációs állapotok összehasonlítását

## Megjegyzés

A snapshot használata különösen fontos volt a dolgozat során, mivel a hosszabb tanítási folyamatok nem vesztek el, és később is folytathatóak maradtak.

A renderelt képek segítségével gyorsan eldönthető volt, hogy egy adott beállítás megfelelő eredményt ad-e, így nem volt szükség minden esetben a teljes vizuális felület használatára.
