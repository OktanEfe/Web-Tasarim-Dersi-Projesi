// script.js

$(document).ready(function () {
    // Sample data, replace this with your dynamic data
    var announcements = [
        "Duyuru 1",
        "Duyuru 2",
        "Duyuru 3",
        "Bölgesel yağlar ve aşırı kilolar nedeniyle kişilerin psikolojisi olumsuz yönde etkilenebiliyor. Özellikle basen, kalça, göbek ve karındaki yağ kütleleri, vücut estetiğini bozarak zamanla sağlık sorunlarına yol açıyor. Kilo vermek ve fit bir vücuda sahip olabilmenin yolu dengeli ve sağlıklı beslenmeyle, kontrollü ve yoğun bir şekilde gerçekleştirilen kas aktivitesinden geçiyor. Wonder estetik zayıflama, elektromanyetik kas stimülasyonu ile bölgesel yağlardan ve selülitlerden kurtulmak için kullanılıyor. Yağları yakarak vücudu şekillendiren Wonder estetik zayıflama, kaslara gönderdiği elektrik sinyalleriyle kasların kasılmasını sağlayarak kas kütlesini artırıyor. Wonder estetik zayıflama, kısa bir sürede bölgesel yağların ve kiloların yok olmasını sağlayarak ameliyatsız yapılan vücut şekillendirme ve geliştirme yöntemleri arasında yer alıyor. Memorial Kayseri Hastanesi Estetik ve Kozmetoloji Bölümü’nde elektromanyetik ve nöro stimülayon teknolojisinin ürünü olan Wonder kullanılmaktadır."
    ];

    var announcementList = $("#announcementList");

    // Populate the announcement list
    announcements.forEach(function (announcement) {
        var listItem = $("<li>").text(announcement);
        announcementList.append(listItem);
    });
});
