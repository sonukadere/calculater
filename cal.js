let text = document.getElementById('display');

function cleardisplay()
{
   document.getElementById('display').innerHTML='0';
}

function appenddisplay(value)
{
 if (document.getElementById('display').innerHTML=='0')
    {
       document.getElementById('display').innerHTML= value;

    }
    else 
    {
        document.getElementById('display').innerHTML += value;

    }
}
function deleteLast()
{
    var text = document.getElementById('display');
    text.innerHTML=text.innerHTML.slice(0, -1);
    if (text.innerHTML ==='')
    {
        text.innerHTML='0';
    }
}

function calculate()
{
    try {
        document.getElementById('display').innerText = eval(display.innerText);

    }
    catch (e)
    {
        document.getElementById('display').innerText = 'Error';
    }
}
