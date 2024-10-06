# 🔌 Gömülü Sistemler

## Gömülü Sistem Nedir?
Gömülü sistem, belirli bir görevi yerine getirmek için tasarlanmış, donanım ve yazılımın bir arada çalıştığı elektronik sistemlerdir. Genellikle bir mikrodenetleyici (MCU) veya mikroişlemci (MPU) barındırırlar ve gerçek zamanlı işlemler gerektiren uygulamalarda kullanılırlar. Bu sistemler, kullanıcının doğrudan etkileşimine gerek kalmadan arka planda çalışır.

## Gömülü Sistemlerde Hangi Donanımlar Kullanılır?
Gömülü sistemlerde yaygın olarak kullanılan mikrodenetleyiciler ve işlemciler şunlardır:

- **Arduino**: Başlangıç seviyesi projeler için yaygın olarak kullanılan bir platformdur. Kolay öğrenilebilirliği ve geniş topluluğu sayesinde yeni başlayanlar için ideal bir seçenektir. Arduino IDE ile programlama genellikle **C/C++** dilleri ile yapılır.
  
- **STM32**: Daha ileri seviye ve profesyonel projeler için kullanılan STM32 mikrodenetleyicileri, güçlü işlem gücü ve çoklu donanım özellikleri ile gömülü sistemlerde sıkça tercih edilir. Programlama dili olarak genellikle **C** ve **C++** kullanılır.

- **Raspberry Pi**: Bir mikrodenetleyiciden ziyade, küçük bir bilgisayar olan Raspberry Pi, daha karmaşık projelerde kullanılır ve **Python**, **C++** gibi dillerle programlanabilir.

## Gömülü Sistemler Nerelerde Kullanılır?
Gömülü sistemler, hayatımızın birçok alanında karşımıza çıkar. İşte bazı kullanım alanları:

- **Beyaz Eşyalar**: Buzdolapları, çamaşır makineleri ve bulaşık makineleri gibi ev aletlerinde enerji yönetimi ve kullanım senaryolarını optimize etmek için kullanılırlar.
- **Otomotiv**: Araçlarda ABS, hava yastığı kontrolü, motor kontrol sistemleri gibi güvenlik ve performans gerektiren sistemler gömülü sistemler tarafından yönetilir.
- **Tıbbi Cihazlar**: Kalp pilleri, hasta izleme sistemleri ve medikal teşhis cihazları gömülü sistemler kullanılarak çalıştırılır.
- **Tüketici Elektroniği**: Televizyonlar, akıllı telefonlar, akıllı saatler ve oyun konsolları gibi cihazlarda gömülü sistemler bulunur.
- **Endüstriyel Otomasyon**: Fabrikalarda üretim hattındaki robotik kontrol ve sensör yönetiminde gömülü sistemler kritik rol oynar.

## Gömülü Sistemlerde Hangi Programlama Dilleri Kullanılır?
Gömülü sistemlerde yaygın olarak kullanılan programlama dilleri şunlardır:

- **C**: Gömülü sistemlerin performans ve bellek kullanımını optimize etmek için sıklıkla kullanılan düşük seviyeli bir dildir.
- **C++**: C++ dili, nesne yönelimli programlama özellikleri sayesinde daha karmaşık projelerde tercih edilir.
- **Python**: Raspberry Pi gibi daha güçlü donanımlarda kullanılır. Özellikle prototip oluşturma aşamasında esneklik sağlar.
  
## Gömülü Sistemlerle Başlangıç İçin Neler Yapılabilir?
Gömülü sistemlere başlamak için en iyi yol basit projelerle deneyim kazanmaktır. İşte birkaç başlangıç projesi:

- **Arduino ile LED Yakıp Söndürme**: Arduino kartı ve bir LED kullanarak basit bir devre kurulabilir. Bu projeyle birlikte, mikrodenetleyiciye komut verip bir donanımı kontrol etme mantığı öğrenilir.
- **Sensörlerle Çalışmak**: Arduino ya da STM32 gibi kartlarla sıcaklık sensörleri, mesafe sensörleri gibi donanımları kullanarak veri toplama ve işleme projeleri yapılabilir.
  
## Gömülü Sistemlerde Hangi Geliştirme Ortamları (IDE) Kullanılır?
- **Arduino IDE**: Arduino kartları için özel olarak geliştirilmiş, kullanıcı dostu bir geliştirme ortamıdır.
- **Keil uVision**: STM32 gibi mikrodenetleyiciler için sıkça kullanılan profesyonel bir geliştirme ortamıdır.
- **PlatformIO**: Çeşitli gömülü platformları destekleyen modern bir IDE'dir. Arduino ve STM32 gibi birçok platformu tek bir yerden yönetme imkanı sunar.

## Gömülü Sistemlerde Kullanılan İletişim Protokolleri Nelerdir?
Gömülü sistemler, diğer cihazlarla haberleşmek için çeşitli iletişim protokollerini kullanırlar:

- **I2C**: İki kablolu bir protokoldür ve genellikle sensörlerle haberleşmede kullanılır.
- **SPI**: Daha hızlı ve düşük gecikmeli bir protokoldür, veri transferinin kritik olduğu durumlarda tercih edilir.
- **UART**: Seri iletişim protokolü olup genellikle PC ile mikrodenetleyici arasında iletişimde kullanılır.

Gömülü sistemlerle uğraşırken bu protokolleri öğrenmek, projelerinizi daha kapsamlı hale getirecektir.

![](../assets/embedded.jpg)