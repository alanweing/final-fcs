$(document).ready(function ()
{
   
    $('#sign-in').on('click', function ()
    {
        
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        
        if ( filter.test(email.value) )
        {
            if ( password.value.length >= 6 )
            {
                swal({
                title: 'Success!',
                allowOutsideClick: 'true',
                confirmButtonText: 'ok',
                type: 'success'
            });
            }
            else
            {
                swal({
                title: 'Error!',
                text: 'the password need to be larger or equal to 6 characters',
                allowOutsideClick: 'true',
                confirmButtonText: 'ok',
                type: 'warning'
            });
            }
        }
        else
        {
            swal({
                title: 'Error!',
                text: 'please, enter a valid email.',
                allowOutsideClick: 'true',
                confirmButtonText: 'ok',
                type: 'error'
            });
        }
        
    });
    
});