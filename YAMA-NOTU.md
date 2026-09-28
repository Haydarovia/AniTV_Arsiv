# Yama Notu — 28.09.2026

## 🔄 Bu güncelleme: MOBİL (28.09.2026 gece)

**Kısa sürüm (paylaşmak için):**

> **📱 Site artık mobil için düzeltildi.** Ziyaretçilerin **%65,9'u telefondan**
> geliyordu ama site hiç telefonda denenmemişti. Bu çalışmada 11 düzeltme yapıldı.
>
> **En önemlisi — site artık çok daha hızlı açılıyor.** Sitenin kapak görselleri ve
> özetler için indirdiği 2,7 MB'lık dosya, sayfa görünür olmadan önce yükleniyordu.
> Artık arka planda geliyor; **sayfa çok daha çabuk açılıyor** ve veri tasarrufu oluyor.
>
> **Telefonda 1166 bölüm yavaş yükleniyordu.** One Piece gibi dizilerde bölüm
> listesinin tamamı tek seferde basılıyordu. Artık **200'er bölümlük sayfalar** hâlinde
> geliyor; 1166 düğüm yerine 200 düğüm yükleniyor.
>
> **"Bölüm bulunamadı" yerine ne olduğu yazıyor.** Eskiden bir uyarı kutusu
> ekranın ortasına çıkıyordu; küçük bir cihazda 24 saniyelik bir oturumu
> durduruyordu. Artık uyarı ekrana yazılıyor, kodu çalışmıyorsunuz.
>
> **"İndirildi" yalanı sona erdi.** Telefonda indirme sessizce başarısız olabiliyor
> ama "indirildi ✓" yazılıyordu. Artık gerçeği söylüyor: indirildi, panoya kopyalandı,
> ya da hiçbiri olmadı — hangisise o.
>
> **Geri düğmesi artık çalışıyor.** Telefonda "geri" tuşu 3 sayfa geri gitmek yerine
> ana sayfaya atıyordu. Artık bölüm listesi sayfaları ve sezon değişimleri geri
> tuşuyla doğru çalışıyor; adres çubuğundaki adres de doğruyu gösteriyor.
>
> **Dokunma hedefleri büyütüldü.** Küçük düğmeler 30–38 pikseldi (parmakla
> vurmak zor). Telefonda 40–44 piksele çıkarıldı; fareyle kullanan masaüstü
> kullanıcısı etkilenmiyor.
>
> **Kapak görselleri küçültüldü.** 460 piksel yerine gerektiği boyut indiriliyor;
> liste sayfasında görsel verisi yaklaşık **yarıya** indi.
>
> **Adres çubuğu hesaba katıldı** — çentikli telefonlarda oynatıcı ve bölüm listesi
> artık ekran dışına taşmıyor. Sistem ayarından "animasyonları azalt" seçili olanlar
> için de sayfa hareketi duruyor.
>
> **Artık oynatıcı sorunlarını ölçebiliyoruz.** Daha önce "oynatıcı bozuk mu, yoksa
> kullanıcı başka yere mi gidiyor" sorusunu **hiçbir veriyle cevaplayamıyorduk**.
> Artık her oynatıcı açılışı, engellenen kaynak, kaynak değiştirme ve "kaynak
> linkini aç" tıklaması sayılıyor. **1 hafta sonra bu soru ilk kez veriyle
> cevaplanabilecek.**
>
> **Küçük not:** Sistem "animasyonları azalt" açıksa sonsuz dönen yükleme
> animasyonu duruyor.

---

**Teknik özet (geliştirici için):**

| | |
|---|---|
| `search.html` | 722.663 → **755.580 B** |
| Değişen dosya | yalnız `search.html` (+669 / −50 satır) |
| Plandan uygulanan | 13 maddenin **11**'i |
| Tur içinde bulunan hata | **13** (kendim yazdıklarım) |
| Bağımsız denetim | 1 KRİTİK + 6 ORTA + 9 DÜŞÜK |
| Son tarama | 8/8 sayfa **0 JS hatası** |

**Doğrulama (ölçüm, tahmin değil):**

| | |
|---|---|
| Oynatıcı iframe isteği | `video.sibnet.ru/shell.php` **tam 1 kez** (ağ günlüğü) |
| Bölüm listesi DOM | 1 166 → **200** düğüm, 6 sayfa |
| Kapak görseli | `naturalWidth` 460 → **158 px**; 13 görselde 12 × `medium` |
| AniList zenginleştirme | puan **8,7** · 1999 · 5 tür · özet |
| Geri tuşu | sayfa 3 → 1 ✅ · sezon 6 → 1 ✅ · derin bağlantı `?s=2&p=3` ✅ |
| Telemetri | 4 olay ağ/günlük üzerinden doğrulandı |
| HTML yapısı | `kaynak_denetle.py` (yeni denetim eklendi) temiz |

**Uygulanmayan 2 madde — gerekçesiyle:**

- **Gerçek cihaz testi (360×800):** yapılamadı, viewport emülasyonu aracı yok.
  **Ölçülemediğini ölçülmüş gibi yazmadık.**
- **Service Worker:** bilinçli ertelendi. En yüksek kazanç *ve* en yüksek risk;
  bayat içerik sunma tehlikesi var, sıfır hata standardını riske atmak doğru değil.

Ayrıntı: `Raporlar/DUZELTME-11-MOBIL-QOL-UYGULAMA.md`

---

## 🧹 Önceki güncelleme: bağlantı temizliği (28.09.2026 sabah)

> **TürkAnime Arşiv güncellendi.**
>
> **Görsel:** Yeni logo eklendi. Artık her sayfada büyük ve net görünüyor.
>
> **Çalışmayan bağlantılar temizlendi.** 78 bağlantı (57 "Byse", 19 "Pixeldrain",
> 2 "VOE") tespit edildi, her biri tek tek doğrulanarak hem bu bölümlerden hem de
> arşiv veritabanından kaldırıldı. Artık o bölümlerde kırık oynatıcı yerine
> çalışan kaynaklar görünecek.
>
> **Önemli:** Daha önce "ölü" ilan edilen bir kısım bağlantılar aslında
> **çalışıyormuş**; ölçüm düzeltildi ve geri getirildi. Ölü ilan ettiğimiz
> bağlantıların çoğu sağlamdı.
>
> **Bazı VOE bağlantıları** reklam sayfasına yönlendiriyordu. Şimdilik
> dokunmadık — bazı kullanıcılarda gerçek oynatıcı çalışabiliyor.
>
> **Bölüm listesi düzeltildi.** Aynı numarayı taşıyan bölümler (mesela bir animede
> hem "3. Bölüm" hem "OVA 3. Bölüm") artık karışmıyor; tıkladığınızda doğru bölüm açılıyor.
>
> **Çok sezonlu animeler için sezon filtresi.** Bir animede 1'den fazla sezon varsa
> üstte "1. Sezon / 2. Sezon" düğmeleri çıkıyor; tıkladığınızda sadece o sezonun
> bölümleri listeleniyor.
>
> **Oynatıcı artık en iyi kaynağı seçiyor.** Daha önce Google Drive her zaman
> otomatik açılıyordu; artık güvenilir kaynak (Sibnet, Mail, UQload…) seçiliyor.
>
> **"Ana sayfa" düğmesi çalışıyor.** Arama yaptıktan sonra "Ana sayfa"ya tıklamak
> arama sonuçlarını tekrar gösteriyordu; artık gerçekten ana sayfaya dönüyor.
>
> **"Bölüme git" kutusu düzeltildi.** Artık tüm sezonlarda arıyor ve aynı numarada
> birden fazla bölüm varsa hangilerinin olduğunu söylüyor.
>
> **Google Drive bağlantılarındaki bozuk adres düzeltildi** (1.471 adet).
>
> **Çok sayıda küçük hata giderildi:** Arama sonuçlarında sıralama artık çalışıyor,
> kategori sayıları doğru, "kopyalandı" yazısı yalan söylemiyor, kaldırılan
> bağlantı geri alınabiliyor, kenar listede arama Türkçe karakterleri tanıyor.
>
> **Daha hızlı:** Bazı oynatıcılar (Yandex Disk) tarayıcıda açılamıyordu; artık
> boş siyah kutu yerine "bu sitede oynatıcıya izin vermiyor, kaynak linkini aç"
> mesajı çıkıyor.
>
> **Çökme düzeltmesi:** Bazı ortamlarda site hiç açılmıyordu. Bu hata giderildi.

| | |
|---|---|
| `search.html` | 693.035 → 722.663 B |
| Yeni dosya | `logo.png` (342×104, 55 KB) |
| `kaldirilan.js` | 100 B → 4.432 B (**78 URL**) |
| Veritabanı | `link` tablosu 317.146 → **317.068** (78 ölü satır silindi) |
| Düzeltme | 24+ (4 tur) |
| Test | 63 rota, 0 konsol hatası |

**Doğrulama (kullanıcı isteğiyle 2 kez yapıldı):**

- `kaldirilan.js` → 78 URL, `node` **ve** `json.loads` ile doğrulandı
- `b/` 6.107 dosya tarandı → **0/78** ölü bağlantı kaldı
- `link` tablosu yedekle **küme karşılaştırması**: kalan 317.068 satır birebir
  aynı, kayıp 0, eklenen 0 · `integrity_check` ok · `foreign_key_check` 0 ihlal
- Site tarayıcıda açıldı: 6.107 anime · 71.689 bölüm · **0 konsol hatası**

**Geri alma:**
`git revert` yeterlidir — tüm değişiklikler sürüm kontrolünde.
Ayrıca `b/` için yerel yedek: `b-YEDEK-SILME-ONCESI`, `b-YEDEK-VOE2`.
