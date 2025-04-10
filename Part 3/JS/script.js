let readyFunc=()=>{
    $('#menuTop').click(function () {
        $('#menuList').slideToggle('fast');
        $('#menuTop').toggleClass('selected');
        $('#imgdiv').toggleClass('selected');

        if (!($('#menuList').is(':visible'))) {
            $('.menuItem').removeClass('selected');
        }
    });

    $('.menuItem').click(function() {
        $('.menuItem').removeClass('selected');
        $(this).addClass('selected');

        let imgURL = $(this).data('imgurl');
        let imageHtml = `<img src="${imgURL}">`;
        $('#imgdiv').html(imageHtml);
    
    });
}

$(document).ready(readyFunc());