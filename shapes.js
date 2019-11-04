var select = 0;
var tanker = [];
var line = [];
var mode = 1;
var first = -1;
var i = 0, j = 0;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var clk = 0
var x, y;

var p1;
var p2;


function clicked(event) {

    x = event.clientX;
    y = event.clientY;

    if(first == -1)
    {
        alert("! Select draw circle first !")
    }

    else if (first == 0) {
        tanker.push({ x: x, y: y, color: "red" })
        drawCircle();
        first = 1;
    }
    else if (first == 1) {
        for (i = 0; i < tanker.length; i++) {

            var a = Math.pow((Math.pow(tanker[i].x - x, 2) + Math.pow(tanker[i].y - y, 2)), 0.5);

            if (a < 70) {
                clk = 0  // clicked inside shape
                break;
            }
            else if (a >= 70) {
                clk = 1 // clicked outside shape
            }
        }


        if (clk == 1) {

            if (mode == 1) {
                tanker.push({ x: x, y: y, color: "red" })
                drawCircle()
            }
            else if (mode == 2) {
                alert("Click inside a shape")
            }
            else if (mode == 3) {
                alert("Click inside a shape")
            }
        }

        else if (clk == 0) {

            if(mode==1)
            {
                alert("Not enough space click somewhere else")
            }

            else if (mode == 2) //color change
            {

                var red = Math.floor(Math.random() * 256);
                var blue = Math.floor(Math.random() * 256);
                var green = Math.floor(Math.random() * 256);
                tanker[i].color = "rgb(" + red + "," + green + "," + blue + ")";
                drawCircle()
            }

            else if (mode == 3)   //connect shapes
            {
                if (select == 0) {
                    p1 = i;
                    select = 1;
                    console.log("p1 = " + p1)
                }
                else if (select == 1) {
                    p2 = i;
                    select = 0
                    console.log("p2 = " + p2)
                    line.push([p1, p2])
                }
                connectline()
            }
        }

    }
}

function connectline() {               //function to draw lines between shapes

    for (i = 0; i < line.length; i++) {
        x1 = tanker[line[i][0]].x;
        y1 = tanker[line[i][0]].y;
        x2 = tanker[line[i][1]].x;
        y2 = tanker[line[i][1]].y;
        u = Math.atan2((y2 - y1), (x2 - x1))

        x1edge = x1 + (40 * Math.cos(u))
        Y1edge = y1 + (40 * Math.sin(u))
        x2edge = x2 - (40 * Math.cos(u))
        Y2edge = y2 - (40 * Math.sin(u))

        context.beginPath();
        context.moveTo(x1edge, Y1edge);
        context.lineTo(x2edge, Y2edge)
        context.strokeStyle = "green"
        context.lineWidth = 3;
        context.stroke();
    }
}


function drawmode() {                
    if(first==-1)                //to check if there is any circle or not                
        first=0;                     
    mode = 1;                        
}                                    
function changemode() {          //functions called when buttons are clicked
    mode = 2;
}
function connectmode() {
    mode = 3;
}


function drawCircle()         //function to draw circle
{
    console.log("draw circle called")
    var t;

    for (t = 0; t < tanker.length; t++) {
        context.beginPath();
        context.arc(tanker[t].x, tanker[t].y, 40, 0, 2 * Math.PI);
        context.fillStyle = tanker[t].color;
        context.fill();
        context.linewidth = 2;
        context.strokeStyle = "black";
        context.stroke();
        context.closePath();
    }
}    



function changecolour1()     //change background and text of button 1
{
    document.getElementById("button1").style.background = "#555555";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button3").style.background = "transparent";
   
    document.getElementById("button1").style.color = "white";
    document.getElementById("button2").style.color = "black";
    document.getElementById("button3").style.color = "black";

}

function changecolour2()      //change background and text of button 2
{
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "#555555";
    document.getElementById("button3").style.background = "transparent";
   
    document.getElementById("button1").style.color = "black";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button3").style.color = "black";

}

function changecolour3()       //change background and text of button 3
{
    document.getElementById("button1").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button3").style.background = "#555555";
   
    document.getElementById("button1").style.color = "black";
    document.getElementById("button2").style.color = "black";
    document.getElementById("button3").style.color = "white";

}