/* Otomatik üretilir: kaldirilanlari_birlestir.py — elle düzenleme */
/* 2026-09-28 taramasi: 76 link, sayfa metni dogrulanarak eklendi.
   BYSE 57       -> iframe icinde "404 Sayfa bulunamadi"  (5/5 ornek dogrulandi)
   PIXELDRAIN 19 -> www.turkanime.tv park alan adi, CSP frame-ancestors 'none' */
/* ---------------------------------------------------------------------------
   2026-09-28 EKLEME: VOE.SX 2 link  (toplam 78)
   Dogrulama: 3 BAGIMSIZ yontem, iki ayri tarama turu.
     1) GET            -> HTTP 404, 118949 bayt, <title>404 - Not found</title>
     2) HEAD           -> HTTP 404
     3) redirects=off  -> HTTP 404, Location BOS, JS yonlendirme hedefi YOK
   Karsilastirma (ayni host, ayni anda, 6 canli ornek):
     canli -> HTTP 200, 769 bayt, <title>Redirecting...</title>,
              JS ile jeremyparticipantanything.com'a gonder
     olu   -> HTTP 404, 118949 bayt GERCEK sayfa
   Yani sunucu "bu video yok" diyor. v1 (link-tara.py) de ayni 2'yi buldu.
   ⭐ KAYDETMEDEN ONCE DOGRULANDI — bu dosyaya 2 SAHTE olu (sablon satiri)
      girmekten sonra cikan tuzak: bkz. Raporlar/DUZELTME-07-HUKUM-MOTORU.md §1
   ---------------------------------------------------------------------------
   2026-09-28 EKLEME: GOOGLE DRIVE 2 link  (toplam 80)
   Dogrulama 3 BAGIMSIZ yontem:
     1) /preview GET  -> HTTP 404 (1K8EA2C) / 400 (1Bg0La9),
                        <title>Sayfa Bulunamadi</title>, 3.291 / 3.257 B
     2) /preview HEAD -> ayni kod (404 / 400)
     3) drive.usercontent.google.com/download (uc?id= 303 ile buraya
        yonlendiriyor) -> HTTP 404, 1652 B "File not found"
   KARSILASTIRMA (ayni anda, ayni yontem):
     canli 1hZa3d75... -> usercontent HTTP 200, 2453 B
                           "Google Drive - Virus scan warning"
   ⭐ AYRIM KESIN: 404 + 1652 B "File not found"  vs  200 + 2453 B
   Not: Drive 404/400 ARASINDA SALINIYOR — ayni dosya bir kosuda 404,
        digerinde 400 donuyor. Bu yuzden iki kod da olum sayildi.
        (bkz. DUZELTME-07-HUKUM-MOTORU.md §9.5)
   ------------------------------------------------------------------------- */
window.KALDIRILAN = [
  "https://byse.sx/0018jl3bh7us",
  "https://byse.sx/05v8fugtsmtf",
  "https://byse.sx/1eztfd2cl4rt",
  "https://byse.sx/1h96gtolq169",
  "https://byse.sx/1zdo4i3248o3",
  "https://byse.sx/38337k2awn4j",
  "https://byse.sx/3k76p84ui1j3",
  "https://byse.sx/49lmybct4jj9",
  "https://byse.sx/5b98hyhspyo2",
  "https://byse.sx/6dleatajx1dh",
  "https://byse.sx/6kzdl8nbl7zy",
  "https://byse.sx/6o7s6edlj4gx",
  "https://byse.sx/7jq3j8w9z5xu",
  "https://byse.sx/7nfymi7qdk3u",
  "https://byse.sx/81rv6ji0z6iq",
  "https://byse.sx/8qujvq3bd8cc",
  "https://byse.sx/923asnnd8b1p",
  "https://byse.sx/9mw39ezkw4c9",
  "https://byse.sx/ao2vhirgjgx0",
  "https://byse.sx/b9a7d0jut768",
  "https://byse.sx/bij8kzgh582r",
  "https://byse.sx/c8qwv1xs8za4",
  "https://byse.sx/cjaa7yo5jcxv",
  "https://byse.sx/cwcb5f484zb6",
  "https://byse.sx/d3bjdwa66vqd",
  "https://byse.sx/do56e5qnqds2",
  "https://byse.sx/eagww8a3ccqt",
  "https://byse.sx/fc5vniewrdnx",
  "https://byse.sx/gebc4qk933pl",
  "https://byse.sx/h5a66vim83bm",
  "https://byse.sx/i9r6m4j41yi9",
  "https://byse.sx/iz8zauu7a980",
  "https://byse.sx/jk0zq0vonmm8",
  "https://byse.sx/kte5qigoxkof",
  "https://byse.sx/ky3mrd37yqyb",
  "https://byse.sx/luxu1s1h6gnj",
  "https://byse.sx/m4n2kp5xsqbi",
  "https://byse.sx/n3y7jvn3yp51",
  "https://byse.sx/nioij3fmbcso",
  "https://byse.sx/ooqk5tl0ui5e",
  "https://byse.sx/qin68gkl6lvl",
  "https://byse.sx/qvdjkshadp5j",
  "https://byse.sx/qwlnwhztstk8",
  "https://byse.sx/rm9pvdb3nbqn",
  "https://byse.sx/rt21k02oxv59",
  "https://byse.sx/sj815ii0sk3n",
  "https://byse.sx/tebqwme2l7ln",
  "https://byse.sx/up9orrof6xmw",
  "https://byse.sx/uv0np4sl0den",
  "https://byse.sx/wb46496zii4i",
  "https://byse.sx/wdwfbhk5xcxz",
  "https://byse.sx/x154io8iiiht",
  "https://byse.sx/xnbhc8x7wbwf",
  "https://byse.sx/xp7a17h1ojl3",
  "https://byse.sx/xz11dloody40",
  "https://byse.sx/yduixzwljv78",
  "https://byse.sx/yid2hui0dr5p",
  "https://www.turkanime.tv/html/pixeldrain.php?id=1KjMVihq",
  "https://www.turkanime.tv/html/pixeldrain.php?id=5NgoFgvc",
  "https://www.turkanime.tv/html/pixeldrain.php?id=5UgHoKJF",
  "https://www.turkanime.tv/html/pixeldrain.php?id=7Hjnd6qU",
  "https://www.turkanime.tv/html/pixeldrain.php?id=CHY5mPJn",
  "https://www.turkanime.tv/html/pixeldrain.php?id=Fiqk9sSC",
  "https://www.turkanime.tv/html/pixeldrain.php?id=UxfPizib",
  "https://www.turkanime.tv/html/pixeldrain.php?id=aYxqRd5E",
  "https://www.turkanime.tv/html/pixeldrain.php?id=jCK6eW9k",
  "https://www.turkanime.tv/html/pixeldrain.php?id=k7h3oJEy",
  "https://www.turkanime.tv/html/pixeldrain.php?id=n6PcoxTA",
  "https://www.turkanime.tv/html/pixeldrain.php?id=pTmVFjYh",
  "https://www.turkanime.tv/html/pixeldrain.php?id=qYWbTmiS",
  "https://www.turkanime.tv/html/pixeldrain.php?id=rFzoDRKV",
  "https://www.turkanime.tv/html/pixeldrain.php?id=toVgSJ2q",
  "https://www.turkanime.tv/html/pixeldrain.php?id=w7FgUth9",
  "https://www.turkanime.tv/html/pixeldrain.php?id=wFGLAbDk",
  "https://www.turkanime.tv/html/pixeldrain.php?id=wTHvdLrt",
  "https://www.turkanime.tv/html/pixeldrain.php?id=wUhWw554",
  "https://voe.sx/e/ee4nbin36lok",
  "https://voe.sx/e/kb5gl0rldcjr",
  "https://drive.google.com/file/d/1K8EA2C-Q5V3y3-hW1vT1XFjJjw-2rogo/preview",
  "https://drive.google.com/file/d/1Bg0La9qfUdFJfUh5W6AYq2BQXIJOpOgo/preview"
];
