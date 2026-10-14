# Bullets & Funerals

Ein Wildwest-Duell fürs Handy: Wer zieht schneller? Das Spiel läuft im Browser und besteht aus einer einzigen Datei (`index.html`) plus Bildern im Ordner `assets/`.

- **Solo:** sieben Stages auf der Karte des Westens, jede Stage schaltet die nächste frei. Jeder Sieg bringt die Belohnung aufs Konto.
- **2 Spieler:** ein Handy flach zwischen euch, einer tippt unten, einer oben
- Jeder wählt vorher eine der vier Figuren: Sunny Sue, Yellow Yale, Minty Molly oder Clover Clint
- **Karte des Westens:** Solo geht es Stage für Stage weiter, jede Stage wird erst nach der vorigen frei:
  - Stage 1 **Forest**: Duell von der Seite im Wald – die Banditen werfen; erst den Gegenstand abschießen, dann den Banditen (Holzfäller, Trapper, Pelzjäger)
  - Stage 2 **Train**: Ich-Perspektive, durch den offenen Wagen eines vorbeifahrenden Zuges schießen (Die Eisenbahnräuber)
  - Stage 3 **Cemetery**: Friedhof bei Nacht im Gewitter, der Bandit taucht hinter einem Grabstein auf und ist nur im Blitz zu sehen; auf ihn tippen (Das Bestattungsinstitut)
  - Stage 4 **Saloon**: am Pokertisch, der Bandit täuscht immer wieder an – erst beim echten Griff tippen, wer auf eine Finte hereinfällt, verliert (Die Zocker)
  - Stage 5 **Canyon**: die Bumble-Brüder stehen in einer Reihe, nach „ZIEH!“ zieht einer – genau den antippen (Die Bumble-Brüder)
  - Stage 6 **Clock Tower**: die Turmuhr schlägt zwölf, erst beim zwölften Schlag tippen – Hund, Katze, Pferd und Hahn lenken ab (Die feinen Herren)
  - Stage 7 **Desert**: das schwere Finale – das klassische Duell von der Seite gegen die neun Banditen bis Furious Francis

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
| `lazy-larry.webp`, `clumsy-clyde.webp`, `bacon-bob.webp`, `greasy-gus.webp`, `crazy-cora.webp`, `smokin-sally.webp`, `terrible-ted.webp`, `killer-kate.webp`, `furious-francis.webp` | die neun Banditen (Furious Francis ist der Endgegner) |
| `hund.webp`, `katze.webp` | Hund und Katze, je zwei Posen (Maul zu, Maul offen): der Hund bellt bei „ZIEH!“, die Katze miaut beim Frühstart |

| `hintergrund-train.webp`, `zug-*.webp`, `sooty-sid.webp`, `ticket-tilly.webp`, `iron-isaac.webp`, `hand-*.webp`, `plakat-train.webp` | Stage 2: Bahnstrecke, Zugteile, die drei Eisenbahnräuber (frontal), die Hände der vier Helden in der Ich-Perspektive |
| `hintergrund-cemetery.webp`, `grabsteine.webp`, `grabsteine-2.webp`, `grim-gideon.webp`, `weeping-wanda.webp`, `mournful-mortimer.webp` | Stage 3: Friedhof, zehn Grabsteine (sechs davon breit genug als Versteck), die drei Banditen des Bestattungsinstituts (frontal) |
| `hintergrund-saloon.webp`, `joker-jack-1/-2.webp`, `queen-quinn-1/-2.webp`, `king-kasimir-1/-2.webp` | Stage 4: Saloon mit Pokertisch, die drei Zocker sitzend ab der Hüfte (Bild 1: ruhig und zwei Finten, Bild 2: zielt und getroffen) |
| `hintergrund-gang.webp`, `bumble-bruder.webp`, `big-boss-bumble.webp` | Stage 5: Felsschlucht im Morgengrauen, ein Bumble-Bruder (Hut und Halstuch knallgrün, das Spiel färbt sie je Bruder um) und Big Boss Bumble |
| `hintergrund-clocktower.webp`, `reverend-rufus.webp`, `mayor-moneybags.webp`, `sheriff-sledge.webp` | Stage 6: Hauptstraße zur Mittagszeit mit Turmuhr, die drei feinen Herren (frontal) |
| `hintergrund-*-quer.webp` | Querformat-Fassungen der Hintergründe von Stage 2 bis 5 (füllen am PC oder bei quer gehaltenem Handy den Schirm) |
| `hintergrund-forest.webp`, `woody-wade.webp`, `mabel-moss.webp`, `possum-pete.webp`, `hickory-hank.webp`, `beaver-bonnie.webp`, `moose-morgan.webp`, `lumber-lou.webp`, `silent-silas.webp`, `grizzly-gordon.webp`, `wurfgegenstaende.webp`, `plakat-forest.webp` | Stage 1: Waldlichtung, neun werfende Banditen von der Seite (bereit, wirft, getroffen), sieben Wurfgegenstände |
| `plakat-desert.webp`, `karte-west.webp`, `karte-west-quer.webp` | Titelbild von Stage 1, Karte des Westens (hochkant und quer) |

Fehlt ein Bild, zeichnet das Spiel eine Silhouette als Platzhalter.

Im Spiel liegen die Bilder als verkleinertes WebP (zusammen etwa 6 MB statt 28 MB). Die Original-PNGs von ChatGPT liegen im Ordner `Originale/` und werden nicht veröffentlicht.

## Schrift, App, Vorschau

- Schrift „Rye“ von Sorkin Type (SIL Open Font License, siehe `assets/rye-OFL.txt`), liegt im Spiel selbst – es wird nichts von Google nachgeladen.
- `manifest.webmanifest` und `sw.js`: Das Spiel lässt sich am Handy über „Zum Startbildschirm hinzufügen“ als App ablegen und läuft danach auch ohne Internet.
- `assets/vorschau.jpg`: Vorschaubild, wenn der Link geteilt wird.

## Videos

In `assets/videos/` (MP4, 720 px, je hochkant und quer): ein Startvideo, das beim Öffnen stumm läuft, und ein Sieger-Video für jeden der vier Helden, das nach dem Sieg in Stage 7 läuft. Ein Tippen überspringt. Geladen wird nur das Video, das zum Bildschirm passt, und erst wenn es gebraucht wird.

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

- `assets/zieh.mp3` (Hundebellen bei „ZIEH!“), `assets/hahn.mp3` (Hahn spannen), `assets/foul.mp3` (Frühstart), `assets/aufprall.mp3` (Aufprall im Staub), `assets/kasse.mp3` (Registrierkasse), `assets/yeehaw-clint.mp3` (Jubelruf von Clover Clint), `assets/yeehaw-molly.mp3` (Jubelruf von Minty Molly), `assets/schrei.mp3` (Killer Kate), `assets/husten.mp3` (Terrible Ted)

Stage 2 (Pixabay, ausgesucht von Michi Zeindl): `zug-rattern.mp3` („Train Locomotive Moog Sub37 Loop“, freesound_community), `zug-pfiff.mp3` („Old Train Steam Whistle“, amber2023), `dampf.mp3` („Steam Hissing 2“, Dragon Studio), `querschlaeger.mp3` („Bullet Hit Metal“, freesound_community), `holz-treffer.mp3` („Wood Hit“, sumaga123).

Stage 3 (Pixabay, ausgesucht von Michi Zeindl; gekürzt und neu kodiert mit den Skripten in `Sounds/Stage_3/`): `regen.mp3` („Heavy Rain Nature Sounds“, juliush; als nahtlose 20-Sekunden-Schleife), `donner-nah.mp3` („Thunder Crack 2“, freesound_community), `donner-fern.mp3` („Thunder Lightning II“, gregorquendel_sounddesign), `kraehe.mp3` („Crow Sound Effect HD“, u_a4gfvwagf1), `tor.mp3` („Grave Yard Iron Gate Opening“, tanweraman), `eule.mp3` („Owl Hooting“, lazychillzone).

Stage 4 (Pixabay, ausgesucht von Michi Zeindl; zugeschnitten mit den Skripten in `Sounds/Stage_4/`): `saloon-musik.mp3` („Marie Louise Janneman – Acoustic Piano Loop“, mleckert82; läuft die ganze Stage über), `stimmen.mp3` („Crowd Indoors Bar“, freesound_community; nahtlose 20-Sekunden-Schleife), `karten-mischen.mp3` („Card Flipping“, freesound_community), `karten-flip.mp3` („Flipcard“, freesound_community), `glas.mp3` („Glass Clink“, freesound_community), `faecher.mp3` („Fluttering Chinese Fan 02“, freesound_community), `chips.mp3` („Placing Poker Chips“, oxidvideos). Stage 2 zusätzlich: `zug-bremse.mp3` („Train Braking Sound“, alex_jauk), `zug-vorbei.mp3` („Train Pass By Distant“, imgmidi; gekürzt).

Stage 5 (Pixabay, ausgesucht von Michi Zeindl; zugeschnitten mit den Skripten in `Sounds/Stage_5/`): `voegel.mp3` („Bird Voices“, sspsurvival; nahtlose 20-Sekunden-Schleife), `hahnenschrei.mp3` („Rooster Crowing“, Dragon Studio), `uff.mp3` („Oof“, freesound_community), `gelaechter.mp3` („Laughter1“, freesound_community; gekürzt).

Stage 6 (Pixabay, ausgesucht von Michi Zeindl; zugeschnitten mit den Skripten in `Sounds/Stage_6/`): `glocke.mp3` („Sino de Igreja“, magiaz; ein Schlag), `ticken.mp3` („Slow Cinematic Clock Ticking Tension 2“, u_mx4xkr2bzy), `stadt.mp3` („People Talking“, perymarques; 20-Sekunden-Schleife), `pferd.mp3` („Horse Neigh“, tanweraman).

Stage 1 Forest (Pixabay, ausgesucht von Michi Zeindl; zugeschnitten mit den Skripten in `Sounds/Stage_Forest/`): `wald.mp3` („Forest Ambience“, audiopapkin; 20-Sekunden-Schleife), `wurf-langsam.mp3` („Simple Whoosh“, Dragon Studio), `wurf-schnell.mp3` („Swoosh Sound Effect 2“, dheerajakam4jor), `glas-zerspringt.mp3` („Glass Bottle Smash“, universfield), `metall-scheppert.mp3` („Hit With Frying Pan“, freesound_community), `holz-splittert.mp3` („Wood Crack 1“, freesound_community), `specht.mp3` („Woodpecker Drumming 1“, nematoki).

Die Originale liegen im Ordner `Sounds/`.

## Zum Testen

- `#gegner=3` hinter der Adresse startet direkt beim dritten Banditen.
- `#stage=1` bis `#stage=7` öffnet gleich diese Stage, ohne die Stages davor zu spielen (auch kombiniert: `#stage=3&gegner=2`).
- `#galerie` zeigt Bacon Bob und Killer Kate groß nebeneinander.
