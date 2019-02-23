function changeColor()
{
    var p = document.getElementById('paragraph');
    var red_border = document.getElementById('red_border').value;
    var green_border = document.getElementById('green_border').value;
    var blue_border = document.getElementById('blue_border').value;
    var border_width = document.getElementById('width').value;

    var red_background = document.getElementById('red_background').value;
    var green_background = document.getElementById('green_background').value;
    var blue_background = document.getElementById('blue_background').value;

    p.style.backgroundColor = "rgb(" + red_background + "," + green_background + "," + blue_background + ")";
    p.style.borderColor = "rgb(" + red_border + "," + green_border + "," + blue_border + ")";
    p.style.borderWidth = border_width+"px";
}