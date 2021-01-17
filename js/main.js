// Selections

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

// Burger

$('.burger').click(function () {
    $('.burger,.menu__list').toggleClass('active');
    $('body').toggleClass('lock');
});

// Slider

$(function () {

    $('.testimonials__items').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 25L18 20.5L22 16" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="#D7D7D7" stroke-width="2"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15L22 19.5L18 24" stroke="#D7D7D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="19" stroke="#D7D7D7" stroke-width="2"/></svg></button >',
        infinite: false,
        responsive: [
            {
                breakpoint: 829,
                settings: {
                    arrows: false,
                    infinite: true,
                }
            },
        ]
    });
    
});