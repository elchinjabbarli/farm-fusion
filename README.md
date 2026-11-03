# 🌾 Farm Fusion

**2D merge + çiftlik oyunu** — TypeScript + Canvas + CSS ile sıfırdan yazılmış özel web motoru.
Hiçbir görsel/ses dosyası yok: tüm sanat prosedürel çizilir, tüm ses WebAudio ile sentezlenir.

▶️ **Oyna:** https://elchinjabbarli.github.io/farm-fusion/

## Özellikler
- 🏝️ **İki yüzey:** Çiftlik Adası (ek/üret/sipariş) + Fusion Tezgahı (merge)
- ♾️ **Sonsuz içerik:** 9.999 seviye XP eğrisi, 40 bölüm + prosedürel bölüm üretimi, her 25 seviyede mektup
- 🌦️ **Canlı dünya:** hava durumu, gece/gündüz (yıldızlar + ateşböcekleri), dönen değirmen, gezinen Pika 🐱
- 📱 **iOS-öncelikli:** çentik/ev çizgisi safe-area'ları, 44pt dokunma hedefleri, yaylı mikro-geribildirim, tam ekran PWA (`black-translucent`)
- 🎨 **Prosedürel sanat (Meadow 2D):** 66 merge eşyası, 16 mahsul, 16 hayvan, 12 makine — hepsi kodla çizili, 4\u00d7 süperörnekleme ile 4K\u2019da keskin
- 🔊 **Sentezlenmiş ses:** 30+ efekt + sahneye göre değişen üretken müzik
- 💾 **Tam çevrimdışı:** PWA, service worker, localStorage kayıt — veri toplamaz
- 🌐 **TR/EN** iki dil

## Geliştirme
```bash
npm install
npm run build   # dist/main.js üretir (esbuild)
npm run check   # TypeScript tip kontrolü
npm test        # 94 birim testi (Gut ilhamlı, sıfır bağımlılık) + JUnit XML
npm run watch   # canlı yeniden yükleme + yerel sunucu
```

**Kalite kapıları:** tip kontrolü + birim testleri + `tests/e2e/flows.maestro.yaml`
E2E akışları (Maestro tarzı; `?debug=1` test kancası `window.__ff` üzerinden
tarayıcı ajanlarıyla oynatılır — bkz. `llms.txt`). Katkı kuralları: `AGENTS.md`.

## Yapı
```
src/           TypeScript kaynak (tek doğruluk kaynağı: data.ts)
css/main.css   Stitch tasarım diline göre stiller
dist/          Derlenmiş oyun (GitHub Pages buradan servis eder)
icons/, fonts/ Uygulama ikonları, OFL lisanslı fontlar
```

## Sürüm
**3.0.0** — `package.json`, `src/version.ts`, `sw.js`, `manifest.webmanifest`, `index.html` ve Ayarlar ekranında aynıdır.

### Değişiklik günlüğü
- **3.0.0 — Painterly Premium (VLM onaylı 7 tur görsel denetim):** çok katmanlı ressam sprite motoru (temas gölgesi → biçim gradyanı → hacim ışığı → speküler → AO → tonlu kontur), Golden Meadow paleti; HUD para/elmas/enerji ikon hatası düzeltmesi; çim ızgara tekrarı öldürüldü (8 hash varyant + ada-seviyesi sürekli biçim bantları + tekil papatya/yonca/çakıl/çim öbeği sahnesi); dalgalı sinüs sürülmüş toprak (tahta görünümü gitti) + 3B topaklar + saman; dede çiti (direk+ray, eğim çeşitliliği, zemin gölgeleri); bina/makine atış gölgeleri + tutarlı sol-üst güneş; tarla zemin ankraj gölgesi; ağaç salınımı + 3 kelebek ambiyansı; Fusion tezgahı: yeşil kalaslı ahşap zemin + vinyet + alt masa kenarı, ahşap damarlı çerçeve, damalı oyuk yuvalar (güçlü kontrast), eşyalar karonun %96'sı, genişleyen ışık halkası + güçlü kıvılcım patlaması, pirinç SAT tepsisi (zıplayan para), okunabilir kilitli üretici kartları, alt başlık şeridi; yeni oyun başlangıç ekimi (4 buğday, 4 büyüme aşaması) — ilk izlenim canlı.
- **2.1.0 — Premium iOS turu:** okyanus degrade + vinyet, kum benekleri, yabani çiçekler, çakıl dokusu, yıldızlı gece; ada tabanı 2× önbellek; SW `?v=` tam eşleşme (eski sürüm asla servis edilmez); safe-area + 44pt hedefler + iOS yayı geri bildirim; `black-translucent` tam ekran PWA.
- **2.0.0 — Meadow 2D:** düz-2D sanat motoru, 4× süperörnekleme, yeni palet, FUSION düzen düzeltmesi.

## Notlar
- Ödüllü reklam simülasyonu içerir; App Store (Capacitor) sürümünde `src/ads.ts` gerçek AdMob ile değiştirilir.
- Geliştirici paneli: `?debug=1` ile açılır.
- Yol haritası: sezon etkinlikleri, prestij, Meltem'in pazarı, Capacitor iOS paketi.

© 2026 Elchin Jabbarli — Tüm hakları saklıdır.
