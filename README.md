EMLAK SATIŞ SİTESİ

Bu proje web tabanlı bir emlak satış sitesidir. Bu sitede insanlar istedikleri herhangi bir mülke bakıp isterlerse kendileri de diğer insanların bakması için yükleyebilmektedir.
Ama bu yükleme işlemi sadece admin veya adminler tarafından kontrol edilebilmektedir ve online satış yoktur beğenilen mülk için kulklanıcı yine admin(ler)le iletişime geçmek zorundadır.


Bu projeyi kullanabilmek için wampserver'ı kurmalı ve çalıştırmalı. Ayrıca proje dosyalarını "wamp64" klasörünün içindeki "www" isimli dosyaya koymalısınız. 
Yoksa admin paneliyle veritabanına erişiminiz olmaz.


phpmyadmin yoluyla veri tabanına giriş yaptığınızda oluşturmanız gereken tablolar şunlardır: (Bütün tablolar 'emlaksatissitesi' adında bir veritabanının içinde olmalı )

1. 'admin' adında bir tablo ve bu tablo 'KullanıcıAdı' ve 'Password' alanlarına sahip olmalı (kullanıcıAdı ve şifre değerlerini manuel olarak girmeniz gerekiyor )

2. 'kullanıcılar' adında bir tablo ve bu tablo 'isim', 'Soyisim', 'telefon', 'dogum_tarihi', 'password', 'user_id' ve 'profile_photo' alanlarına sahip olmalı.

3. 'mülk' adında bir tablo ve bu tablo 'Mulk_id', 'Mulk_turu', 'ilan_adi', 'ilan_adresi', 'metrekare', 'detaylar' ve 'resim' alanlarına sahip olmalı.
