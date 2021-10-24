canvas = document.getElementById("myCanvas");
color ="red";
mouseEvent = ""
ctx= canvas.getContext("2d");
width_of_line = 1;
 var last_position_of_x , last_position_of_y; 

 canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("W").value;
    console.log(color);

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;

        console.log("last position of x and y codinates =");
        console.log("x=" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
}

last_position_of_x = current_position_of_x;
last_position_of_y= current_position_of_y;
}

