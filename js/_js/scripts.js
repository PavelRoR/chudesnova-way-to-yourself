//@prepros-prepend jquery-2.1.1.min.js
// @prepros-prepend flipclock.min.js 

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });

    // Записи
    (function ($) {
        jQuery.fn.lightTabs = function (options) {

            var createTabs = function () {
                let tabs = this,
                    i = 0,

                    showPage = function (i) {
                        $(tabs).children("div").children("div").hide();
                        $(tabs).children("div").children("div").eq(i).show();
                        $(tabs).children("ul").children("li").removeClass("active");
                        $(tabs).children("ul").children("li").eq(i).addClass("active");
                    };
                showPage(0);
                $(tabs).children("ul").children("li").each(function (index, element) {
                    $(element).attr("data-page", i);
                    i++;
                });
                $(tabs).children("ul").children("li").click(function () {
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $("#recs").lightTabs();

    /* Таймер */
    var clock;
    var futureDate = new Date("October 31, 2019 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
        return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
        $('.clock').addClass('twoDayDigits');
    } else {
        $('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
        diff = 0;
        $('#sale-1').text('500р.');
        $('#sale-2').text('1 000р.');
        $('#sale-3').text('2 000р.');
        $('#today-1').text('3 900р.');
        $('#today-2').text('5 500р.');
        $('#today-3').text('9 900р.');
        $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4028&clean=true&lg=ru');
        $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4032&clean=true&lg=ru');
        $('#link-3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4036&clean=true&lg=ru');
        // $('.cost-full span').css('textDecoration', 'none');
        // $('.timer, .cost-sale, .cost-today, .prepayment').remove();
    }
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'ru',
        callbacks: {
            stop: function () {
                $('#sale-1').text('500р.');
                $('#sale-2').text('1 000р.');
                $('#sale-3').text('2 000р.');
                $('#today-1').text('3 900р.');
                $('#today-2').text('5 500р.');
                $('#today-3').text('9 900р.');
                $('#link-1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4028&clean=true&lg=ru');
                $('#link-2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4032&clean=true&lg=ru');
                $('#link-3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4036&clean=true&lg=ru');
                // $('.cost-full span').css('textDecoration', 'none');
                // $('.timer, .cost-sale, .cost-today, .prepayment').remove();
            }
        },
    });


    /*Конец документа*/
});