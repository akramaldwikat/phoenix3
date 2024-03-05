$(".slider #slider").slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false
            }
        }
    ]
});

$(".news #newSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false
            }
        }
    ]
});

$(".ourMenu #ourMenuSlider").slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    // arrows: false, Boolean
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                infinite: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false
            }
        }
    ]
});

$(".Search").click(function () {
    $(".formSearch").fadeIn();
});

$(".formSearch .closed").click(function () {
    $(".formSearch").fadeOut();
});

$(".menuIcon").click(function () {
    $(".menuMobile").toggleClass("active");
});


// switch view page menu
$(".topContent .veiws .listView").click(function () {
    $("#ourMenu li.product").addClass("listItems");
});

$(".topContent .veiws .gridView").click(function () {
    $("#ourMenu li.product").removeClass("listItems");
});

const rangevalue =
    document.querySelector(".slider-container .price-slider");
const rangeInputvalue =
    document.querySelectorAll(".range-input input");

// Set the price gap 
let priceGap = 500;

// Adding event listners to price input elements 
const priceInputvalue =
    document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {

        // Parse min and max values of the range input 
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }

        // Validate the input values 
        if (maxp > 10000) {
            alert("maximum price cannot be greater than 10000");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        // Check if the price gap is met  
        // and max price is within the range 
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            }
            else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right =
                    `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    // Add event listeners to range input elements 
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal =
                parseInt(rangeInputvalue[0].value);
            let maxVal =
                parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal

            // Check if the price gap is exceeded 
            if (diff < priceGap) {

                // Check if the input is the min range input 
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {

                // Update price inputs and range progress 
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left =
                    `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right =
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}

$('#content').hide().fadeIn(function () {
    $('#content').animate({
        right: "-100%"
    }, 500);
}, 1500).css('right', '0');

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 250) {
//         $('.page-menu2 .category .categ').addClass('scroll');
//     } else {
//         $('.page-menu2 .category .categ').removeClass('scroll');
//     }
// });

// $(document).ready(function () {
//     // Set the distance from the top of the page to start adding the class
//     const scrollDistance = 300;

//     // Check if the user has scrolled more than the distance from the top
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > scrollDistance) {
//             $('.page-menu2 .category .categ').addClass('scrolled');
//         } else if ($(window).scrollTop() + $(window).height() === $(document).height()) {
//             //you are at bottom
//             $(".page-menu2 .category .categ").removeClass("scrolled");
//         }
//         else {
//             $('.page-menu2 .category .categ').removeClass('scrolled');
//         }
//     });
// });

jQuery(document).ready(function () {

    var sectionOffset = jQuery('.innerContent').offset().top;

    // left side scrolling calculation...... remove fixed class and top margin
    var rightHeight = jQuery('.innerContent .content').outerHeight();
    var leftHeight = jQuery('.innerContent .category .categ').outerHeight() + 50;
    var margin = (rightHeight - leftHeight + 50);
    var removeFixedOffset = sectionOffset + rightHeight - leftHeight;

    jQuery(window).on('scroll', function () {

        if (jQuery(this).scrollTop() > sectionOffset) {
            jQuery('.innerContent .category .categ').addClass('scrolled');
        } else {
            jQuery('.innerContent .category .categ').removeClass('scrolled');
        }
        if (jQuery(this).scrollTop() > removeFixedOffset) {
            jQuery('.innerContent .category .categ').removeClass('scrolled');
            jQuery('.innerContent .category .categ').css('margin-top', (margin + 'px'));
        } else {
            jQuery('.innerContent .category .categ').css('margin-top', '0px');
        }

    });

});
