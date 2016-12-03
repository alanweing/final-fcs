$(document).ready(function ()
{
    
    $('#skill, #im-a, #downloading').on('change', function ()
    {
        if ($('#skill').val() != 0 && $('#im-a').val() != 0 && $('#downloading').val() != 0)
            changeButtonsClass (true)
        else
            changeButtonsClass (false)
    })
    
});

function changeButtonsClass (status)
{
    var buttons = document.getElementsByTagName('button');
    if (status)
    {
        buttons[0].className += ' active ';
        buttons[1].className += ' active ';
    }
    else
    {
        buttons[0].className = 'disabled';
        buttons[1].className = 'disabled';
    }
}