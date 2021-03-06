$(document).ready(function ()
{
    $('.parallax-window').parallax({
        naturalWidth: 1440,
        naturalHeight: 600,
        imageSrc: 'img/ps-marquee1440x660.jpg'
    });

    $('#overview, #whats-new').on('click', function ()
    {
        new Spinner({
            lines: 13,
            length: 28,
            width: 14,
            radius: 42,
            scale: 1,
            corners: 1,
            opacity: 0.25,
            speed: 1,
            trail: 60,
            color: '#1B3D47',
            direction: 1,
            fps: 20,
            position: 'absolute',
            top: '0',
            left: '50%'
        }).spin(document.getElementById('header-content'));
        
        getPage('pages/' + this.id + '.html').then(
            function (success)
            {
                $('#header-content').html(success);
            },
            function (error)
            {
                var message = 'an unknown error has occurred :(';
                if (error.status == 404)
                    message = 'sorry, the requested page was not found'
                swal({
                    title: 'ERROR',
                    text: message,
                    type: 'warning',
                    allowOutsideClick: true,
                    confirmButtonText: 'OK'
                });
            }
        );
    });
    
    var modal = document.getElementById('modal');
    
    $('#buy-now').on('click', function () 
    {
        getPage('pages/buy-now.html')
            .then(function (response)
            { 
                modal.getElementsByClassName('modal-content')[0].innerHTML = response;
                modal.style.display = 'block';
                document.getElementsByClassName('close')[0].onclick = function () 
    {
        modal.style.display = 'none';
    };
    
            }
        );
    });

    window.onclick = function (event)
    {
        if (event.target == modal)
        {
            modal.style.display = 'none';
        }
    };
    
});

function getPage(url) {

    var promise = $.Deferred();

    $.ajax({
        url: url,
        async: true,
        method: 'GET',
        success: function (response) {
            promise.resolve(response);
        },
        error: function (error) {
            promise.reject(error);
        }
    });

    return promise;

}
