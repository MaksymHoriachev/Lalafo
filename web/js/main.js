var $indexPhone = 3,
    $indexDay = 2;


$('#language').on('click', function () {
    $('#language-list').toggle();
});

$('#header-login').on('click', function () {
    $('.header-list-login').toggle();
});

$('#btn-close-purple').on('click', function () {
    $('#notification-purple').fadeOut(0);
});

$('#btn-close-scarlet').on('click', function () {
    $('#notification-scarlet').fadeOut(0);
});

$('#manager').on('click', function () {
    $('#dropdown').toggle();
});

$('#footer-btn').on('click', function () {
   $('#footer-btn-list').toggle();
});


/* -------------- working time & day dropdown -------------------- */

$('.profile-day p').on('click', function () {
    $(this).parent().find('.day-dropdown').toggle();
});

$('.profile-working-time p').on('click', function () {
    $(this).parent().find('.working-dropdown').toggle();
});


/* ---------------------- add phone --------------------- */

$('#add-number').on('click' ,function () {
    var $phoneCloned = $('div.profile-phone:last-child').clone(true, true),
        $phoneClosedLabel = $phoneCloned.find('label'),
        $phoneClosedInput = $phoneCloned.find('input'),
        $phoneClosedSelect = $phoneCloned.find('select');

    $phoneClosedLabel.each(function () {

        if ($(this).attr('for')) {
            $(this).attr('for', function (i,val) {
                return val.substring(0, val.length - 1) + $indexPhone
            })
        }

    });

    $phoneClosedInput.each(function () {

        if ($(this).attr('id')) {
            $(this).attr('id', function (i,val) {
                return val.substring(0, val.length - 1) + $indexPhone
            })
        }

        if ($(this).attr('name')) {
            $(this).attr('name', function (i,val) {
                return val.substring(0, val.length - 1) + $indexPhone
            })
        }

    });

    $phoneClosedSelect.each(function () {

        if ($(this).attr('name')) {
            $(this).attr('name', function (i,val) {
                return val.substring(0, val.length - 1) + $indexPhone
            })
        }

    });

    $indexPhone++;

    $phoneCloned.appendTo('.profile-phones-content');

    $(".phone-input").mask("00 000 00 99");
});

$('.btn-profile-phone').on('click', function () {
    $(this).parent().remove();
});


/* ---------------------- add day --------------------- */

$('#add-day').on('click', function () {
    var $dayCloned = $('div.profile-day-time:last-child').clone(true, true),
        $dayClonedLabel = $dayCloned.find('label'),
        $dayClonedInput = $dayCloned.find('input');


    $dayClonedLabel.each(function () {

        if ($(this).attr('id')) {
            $(this).attr('id', function (i,val) {
                return val.substring(0, val.length -1) + $indexDay
            })
        }

        if ($(this).attr('for')) {
            $(this).attr('for', function (i,val) {
                return val.substring(0, val.length -1) + $indexDay
            })
        }

    });

    $dayClonedInput.each(function () {

        if ($(this).attr('id')) {
            $(this).attr('id', function (i,val) {
                return val.substring(0, val.length -1) + $indexDay
            })
        }

        if ($(this).attr('name')) {
            $(this).attr('name', function (i,val) {
                return val.substring(0, val.length -1) + $indexDay
            })
        }

    });

    $dayCloned.appendTo('.profile-time-content');

    $indexDay++;
});

//-------------------- phone mask ----------------------

//$(".phone-input").live('focus', function () {
//$(this).mask("99 999-99-99");
//});
$(".phone-input").mask("00 000 00 00");


//----------------------- time input -------------------

$(".working-dropdown-time").mask("00:00");
