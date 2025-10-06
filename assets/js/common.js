(function($) { $(function() {    

    // Залипающее меню
    $(window).scroll(function(){
        if( $(window).scrollTop() > 81 ) {                
            $('header').addClass('header-sticky');                       
                                                                     
        } else {
            $('header').removeClass('header-sticky');              
        }
    });    

    // Мобильное меню и burger button и выпадающее подменю на ховере
    toggleButton = $('.toggle-button'),
    menuWrap = $('.menu-wrap'),
    sidebarArrow = $('.menu-item-has-children a');
    
    toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        menuWrap.toggleClass('menu-show');            
    });
    if(window.innerWidth < 991) {
        sidebarArrow.click(function() {
            $(this).next().slideToggle(300);
        });
    };

    // Мобильное меню и burger button и выпадающее подменю на клике
    /*toggleButton = $('.toggle-button'),
    menuWrap = $('.menu-wrap'),
    sidebarArrow = $('.menu-item-has-children a');

    toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });
    sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });*/

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

    // ScrollTo - Скролл до якоря #     
    $('a.target-btn[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - ($('header').height())
        }, 600);
    });    

    // Меняем свойства Лайтбокса
    /*lightbox.option({
      'albumLabel': "Изображение %1 из %2"
    });*/

    // Инициализация карусели    
    /*$('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img src="/wp-content/themes/foto/assets/img/arr-prev.png" alt="" class="arr-prev">',
        nextArrow: '<img src="/wp-content/themes/foto/assets/img/arr-next.png" alt="" class="arr-next">',
        dots: true,
        appendDots: '.reviews-dots',
        speed: 1000,
        //adaptiveHeight: true,
        fade: true,
        responsive: [            
            {
                breakpoint: 768,
                settings: {
                    pauseOnFocus: false,
                    pauseOnHover: false
                }
            }     
        ]
    });*/ 

}) })(jQuery)