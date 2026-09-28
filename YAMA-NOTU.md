# Yama Notu — 28.09.2026

**Kısa sürüm (paylaşmak için):**

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

---

**Teknik özet (geliştirici için):**

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
