# TRANSPARANZE — Vercel başlangıç sitesi

Bu klasör, Vercel'de ücretsiz yayınlanabilecek statik sanatçı web sitesi başlangıç projesidir.

## Yayınlama (en kolay yol)
1. https://github.com adresinde hesap açın / giriş yapın.
2. New repository ile `transparanze-site` adlı Public repository oluşturun.
3. Bu ZIP'i bilgisayarınızda açın.
4. İçindeki `index.html`, `styles.css`, `script.js` ve `README.md` dosyalarını GitHub deposuna yükleyin.
5. https://vercel.com adresinde GitHub ile giriş yapın.
6. Add New → Project → `transparanze-site` deposunu seçin.
7. Framework Preset: Other; Build Command ve Output Directory alanlarını boş bırakın; Deploy'a basın.
8. Vercel size `*.vercel.app` adresi verir.

## Müzik ekleme
`script.js` dosyasındaki `SITE_CONFIG` bölümüne MP3 dosyasının doğrudan erişilebilir URL'sini ve sosyal platform bağlantılarını ekleyin. Şu an demo kartı hazır; gerçek ses dosyası URL'si eklenmeden müzik çalmaz.

## Önemli
- Bu sürüm statik ön yüzdür; henüz parola korumalı yönetim paneli veya müzik yükleme paneli içermez.
- İlk sürümde e-posta adresini ve sosyal bağlantıları gerçek bilgilerle değiştirmeden önce kontrol edin.
- Alan adı ve yüksek trafik / ses depolama ihtiyaçları ayrıca değerlendirilebilir.
