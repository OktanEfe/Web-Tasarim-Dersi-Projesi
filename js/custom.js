jQuery(document).ready(function () {


    $('#carouselHacked').carousel();

    //this code is for the gmap
    var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
    });
    


    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }


    //this code is for animation nav
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if (windowScrollPosTop >= 150) {
            jQuery(".header").css({
                "background": "#B193DD",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "-40px",
                "margin-bottom": "0"
            });
            jQuery(".navbar-default").css({
                "margin-top": "-15px",
            });
        } else {
            jQuery(".header").css({
                "background": "transparent",
            });
            jQuery(".top-header img.logo").css({
                "margin-top": "-15px",
                "margin-bottom": "25px"
            });
            jQuery(".navbar-default").css({
                "margin-top": "12px",
                "margin-bottom": "0"
            });

        }
    });




});

 // Duyurular js  başlangıç

 let announcements = [];
 let visibleAnnouncements = 5; // Initial number of visible announcements

 function showPopup(title, content, imageLink, pdfLink, wordLink, announcementDate) {
     document.getElementById('popupTitle').innerText = title;
     document.getElementById('popupContent').innerText = content;
     document.getElementById('popupImage').src = imageLink;
     document.getElementById('popupPdf').href = pdfLink;
     document.getElementById('popupWord').href = wordLink;
     document.getElementById('popupDate').innerText = `Duyuru Tarihi: ${announcementDate}`;

     document.getElementById('popup').style.display = 'block';
     document.getElementById('popupOverlay').style.display = 'block';
 }

 function hidePopup() {
     document.getElementById('popup').style.display = 'none';
     document.getElementById('popupOverlay').style.display = 'none';
 }

 function sortAnnouncements() {
     announcements.sort((a, b) => new Date(b.date) - new Date(a.date));
     displayAnnouncements();
 }

 function showMoreAnnouncements() {
     visibleAnnouncements += 5;
     displayAnnouncements();
 }

 function displayAnnouncements() {
     const duyuruContainer = document.getElementById('duyuruContainer');
     duyuruContainer.innerHTML = '';

     announcements.slice(0, visibleAnnouncements).forEach(announcement => {
         const duyuruDiv = document.createElement('div');
         duyuruDiv.classList.add('duyuru');

         const titleElement = document.createElement('h2');
         titleElement.innerHTML = `<a href="#" onclick="showPopup('${announcement.title}', '${announcement.content}', '${announcement.imageLink}', '${announcement.pdfLink}', '${announcement.wordLink}', '${announcement.date.toISOString()}')">${announcement.title}</a>`;
         duyuruDiv.appendChild(titleElement);

         const contentElement = document.createElement('p');
         contentElement.innerText = announcement.content;
         duyuruDiv.appendChild(contentElement);

         duyuruContainer.appendChild(duyuruDiv);
     });

     // Display or hide the "Show More" button based on the number of visible announcements
     const showMoreButton = document.getElementById('showMoreButton');
     if (visibleAnnouncements < announcements.length) {
         showMoreButton.style.display = 'block';
     } else {
         showMoreButton.style.display = 'none';
     }
 }

   // Duyuru 1
announcements.push({
    title: 'Sağlıklı ve Estetik Bir Gelecek İçin Yanınızdayız!',
    content: 'Estetik Hastanemizde sizleri modern tıbbın güvencesiyle buluşturuyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-02-10')
});

// Duyuru 2
announcements.push({
    title: 'Güzelliğinize Değer Katmak İçin Buradayız!',
    content: 'Estetik uzmanlarımızla, hayalinizdeki görünüme kavuşmak için sizleri bekliyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-03-15')
});

// Duyuru 3
announcements.push({
    title: 'Yeni Görünüm, Yeni Siz!',
    content: 'Estetik cerrahi alanındaki uzman ekibimizle, sizleri daha iyi bir versiyonunuza kavuşturuyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-05-20')
});

// Duyuru 4
announcements.push({
    title: 'Doğal Güzellik, Uzman Ellerde!',
    content: 'Estetik deneyimimizle, doğal ve zarif güzellik için bize güvenebilirsiniz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-04-02')
});

// Duyuru 5
announcements.push({
    title: 'Estetikte Yenilikçi Çözümler Burada!',
    content: 'En son teknoloji ve yenilikçi yöntemlerle estetik tedavilerimizle tanışın.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-07-08')
});

// Duyuru 6
announcements.push({
    title: 'Hayalinizdeki Görünüme Ulaşmanın Tam Zamanı!',
    content: 'Estetik Hastanemizde, size özel çözümlerle hayalinizdeki görünüme kavuşabilirsiniz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-06-12')
});

// Duyuru 7
announcements.push({
    title: 'Güvenli ve Hijyenik Ortamda Estetik Cerrahi',
    content: 'Estetik Hastanemizde sizleri en üst düzeyde güvenlik ve hijyen standartlarıyla ağırlıyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-08-25')
});

// Duyuru 8
announcements.push({
    title: 'Estetikte İleri Teknoloji, Deneyimde Mükemmeliyet!',
    content: 'Gelişmiş teknoloji ve deneyimli ekibimizle, estetikte yeni bir döneme hazır olun.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-10-01')
});

// Duyuru 9
announcements.push({
    title: 'Estetik Tedavilerde Güvenilir Adresiniz!',
    content: 'Sizi daha güzel bir geleceğe taşımak için Estetik Hastanemize bekliyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-09-14')
});

// Duyuru 10
announcements.push({
    title: 'Estetik Uzmanlarımızla Randevu Alın, Farkı Hemen Göreceksiniz!',
    content: 'Size özel planlanmış estetik tedavilerle, kendinizi daha iyi hissedin.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-11-19')
});

// Duyuru 11
announcements.push({
    title: 'Güzelliğinizi Öne Çıkarın, Estetikte Lider Adres!',
    content: 'Estetik alanındaki uzmanlarımızla, doğal güzelliğinizi ortaya çıkarın.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-12-02')
});

// Duyuru 12
announcements.push({
    title: 'Estetikte Güvenilir Eller, Sizinle Bir Adım Önde!',
    content: 'Estetik konusundaki uzmanlık alanlarımızla, size en iyi hizmeti sunmak için buradayız.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-01-30')
});

// Duyuru 13
announcements.push({
    title: 'Doğal ve Kalıcı Güzellik İçin Estetik Hastanemizle Tanışın!',
    content: 'Estetik tedavilerimizle, doğal güzelliğinizi kalıcı kılmanıza yardımcı oluyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-02-18')
});

// Duyuru 14
announcements.push({
    title: 'Yeniden Gençleşmek İçin Estetikte Yenilik Zamanı!',
    content: 'Estetik uzmanlarımızla, zamanın izlerini silmek için size özel çözümler sunuyoruz.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'duyuru.pdf',
    wordLink: 'duyuru.docx',
    date: new Date('2023-04-05')
});

