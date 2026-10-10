# Bullets & Funerals

Ein Wildwest-Duell fürs Handy: Wer zieht schneller? Das Spiel läuft im Browser und besteht aus einer einzigen Datei (`index.html`) plus Bildern im Ordner `assets/`.

- **Solo:** acht Banditen nacheinander, jeder schneller als der vorige. Jeder Sieg bringt die Belohnung aufs Konto.
- **2 Spieler:** ein Handy flach zwischen euch, einer tippt unten, einer oben
- Jeder wählt vorher eine der vier Figuren: Sunny Sue, Yellow Yale, Minty Molly oder Clover Clint

## Starten

PowerShell öffnen und eintippen:

```
cd $HOME\Desktop\Bullets-and-Funerals
python -m http.server 8080
```

Dann im Browser **http://localhost:8080** öffnen. Auf dem Handy im selben WLAN: `http://<IP-Adresse des PCs>:8080` (die IP zeigt `ipconfig` an).

Beenden mit `Strg + C`.

## Grafiken

Die gemalten Bilder entstehen mit ChatGPT, alle im selben Chat, damit der Stil gleich bleibt. Jede Figur ist ein Bild im Querformat 3:2 mit transparentem Hintergrund und drei Posen nebeneinander (stehend, zielend, umfallend), Blick nach rechts. Das Spiel schneidet die Posen selbst aus.

| Datei in `assets/` | Wofür |
|---|---|
| `hintergrund.webp` | Landschaft bei Sonnenuntergang |
| `spieler-gelb-frau.webp`, `spieler-gelb-mann.webp` | Sunny Sue und Yellow Yale (Gelb): im Solo-Modus und unten im 2-Spieler-Modus |
| `spieler-gruen-frau.webp`, `spieler-gruen-mann.webp` | Minty Molly und Clover Clint (Grün): oben im 2-Spieler-Modus |
| `lazy-larry.webp`, `clumsy-clyde.webp`, `bacon-bob.webp`, `greasy-gus.webp`, `crazy-cora.webp`, `smokin-sally.webp`, `terrible-ted.webp`, `killer-kate.webp` | die acht Banditen |

Fehlt ein Bild, zeichnet das Spiel eine Silhouette als Platzhalter.

Im Spiel liegen die Bilder als verkleinertes WebP (zusammen etwa 6 MB statt 28 MB). Die Original-PNGs von ChatGPT liegen im Ordner `Originale/` und werden nicht veröffentlicht.

## Schrift, App, Vorschau

- Schrift „Rye“ von Sorkin Type (SIL Open Font License, siehe `assets/rye-OFL.txt`), liegt im Spiel selbst – es wird nichts von Google nachgeladen.
- `manifest.webmanifest` und `sw.js`: Das Spiel lässt sich am Handy über „Zum Startbildschirm hinzufügen“ als App ablegen und läuft danach auch ohne Internet.
- `assets/vorschau.jpg`: Vorschaubild, wenn der Link geteilt wird.

## Klänge

Alle Klänge sind Aufnahmen von [Pixabay](https://pixabay.com) unter der Pixabay Content License:

- `assets/startmelodie.mp3`: „Buckeye Burnout (15 Sec Stinger) – Country And Western“ von kaazoom
- `assets/yeehaw-mann.mp3`: „Yeehaw“ von tygger281
- `assets/yeehaw-frau.mp3`: „woman saying yeehaw 2“ von LazyChillZone
- `assets/gameover.mp3`: „Bell Toll“ von Stickypix7996
- `assets/schuss.mp3`: „Single Pistol Gunshot 3.3“ von morganpurkis (über freesound_community)
- `assets/wind.mp3`: „Desert Wind 2“ von tanweraman
- `assets/finale.mp3`: „Victory Bell Success Fanfare“ von Emand_Edroff (wenn alle acht Banditen besiegt sind)
- `assets/klick.mp3`: „Click Button“ von MilanWulf (Klicken beim Hochzählen des Kontostands)

Ebenfalls von Pixabay, ausgesucht und lizenzgeprüft von Michi Zeindl (die Original-Dateinamen sind nicht mehr bekannt):

- `assets/zieh.mp3` (Glocke bei „ZIEH!“), `assets/hahn.mp3` (Hahn spannen), `assets/foul.mp3` (Frühstart), `assets/aufprall.mp3` (Aufprall im Staub), `assets/kasse.mp3` (Registrierkasse), `assets/yeehaw-clint.mp3` (Jubelruf von Clover Clint), `assets/yeehaw-molly.mp3` (Jubelruf von Minty Molly), `assets/schrei.mp3` (Killer Kate), `assets/husten.mp3` (Terrible Ted)

Die Originale liegen im Ordner `Sounds/`.

## Zum Testen

- `#gegner=3` hinter der Adresse startet direkt beim dritten Banditen.
- `#galerie` zeigt Bacon Bob und Killer Kate groß nebeneinander.
