(function($) { $(function() {

    // Preloader
    /*$(window).on('load', function () {
        preloader = $('.loaderArea'),
        loader = preloader.find('.loader');
        $('html').removeClass('overflow-hidden');
        $('body').removeClass('overflow-hidden');
        loader.delay(500).fadeOut();
        preloader.delay(500).fadeOut('slow');
    });*/

    // Мобильное меню и burger button и выпадающее подменю на ховере
    sidebarArrow = $('.menu-item-has-children > a');    
    backButton = $('.app-back-button')
    sidebarArrow.click(function() {
        if(window.innerWidth > 1200) {
            $(this).next().slideToggle(300);     
        } else {
            $(this).next().toggleClass('show-item'); 
        };
    });
    backButton.click(function() {        
        $(this).parent().toggleClass('show-item');
    });

    

    // Кнопка Вверх
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

}) })(jQuery)




window.addEventListener('load', () => {
   /*Sticky header*/
    var header = document.querySelector('.header-wrapper');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
        }
    });




    /*Sub menu*/
    const firstItem = document.querySelector('.sub-main-menu-item:first-child');
    if(window.innerWidth > 1200) {
        firstItem.classList.add('visible-hover');
    };

    const items = document.querySelectorAll('.sub-main-menu-item');
    items.forEach(item => {
        const itemLink = item.querySelector('.sub-main-menu-item-link');
        const itemBack = item.querySelector('.app-back-button-2');
        itemLink.addEventListener('click', () => {
            items.forEach(el => el.classList.remove('visible-hover'));
            item.classList.add('visible-hover');
        });
        itemBack.addEventListener('click', () => {
            items.forEach(el => el.classList.remove('visible-hover'));
            item.classList.remove('visible-hover');
            console.log('hdhdhd');
        });
    });



    /*Menu toggle*/
    const toggleButton = document.querySelector('.app-toggle-button')
    const navMenu = document.querySelector('.menu-wrapper')
    const bodyWrapper = document.querySelector('body')
    const htmlWrapper = document.querySelector('html')
    const headerWrapper = document.querySelector('.header-wrapper')
    if (toggleButton) { // add event listener only of button exists
        toggleButton.addEventListener('click', function() {   
            if(!this.classList.contains('button-open')) {
                this.classList.add('button-open')
                navMenu.classList.add('menu-wrapper-show')                
                bodyWrapper.classList.add('overflow-hidden')
                htmlWrapper.classList.add('overflow-hidden')
                headerWrapper.classList.add('header-wrapper-open')
            } else {
                this.classList.remove('button-open')
                navMenu.classList.remove('menu-wrapper-show')                
                bodyWrapper.classList.remove('overflow-hidden')    
                htmlWrapper.classList.remove('overflow-hidden')   
                headerWrapper.classList.remove('header-wrapper-open')

                document.querySelector('.show-item').classList.remove('show-item')
                document.querySelector('.visible-hover').classList.remove('visible-hover')
            }       
        })
    }




    var swiper = new Swiper(".projects-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".projects-swiper-pagination",
        },        
        navigation: {
            nextEl: ".projects-swiper-button-next",
            prevEl: ".projects-swiper-button-prev",
        },
    });




    var swiper = new Swiper(".documents-slider", {
        slidesPerView: 4,
        spaceBetween: 40,
        pagination: false,
        navigation: {
            nextEl: ".docs-swiper-button-next",
            prevEl: ".docs-swiper-button-prev",
        },
    });
});