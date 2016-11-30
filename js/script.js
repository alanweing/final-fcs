$(document).ready(function ()
{
    $('.parallax-window').parallax({
        naturalWidth: 1440,
        naturalHeight: 600,
        imageSrc: 'img/ps-marquee1440x660.jpg'
    });
    
    $('#overview').on('click', function ()
    {
        $('#header-content').html('nada');
    });
});