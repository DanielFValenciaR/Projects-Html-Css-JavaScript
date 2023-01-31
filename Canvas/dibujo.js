var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var margen = d.width - 1;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, xf, yi, yf;
    var nxi, nyf;
    var espacio = ancho / lineas;

    var escoge_color1 = document.getElementById("colores").value;
    var escoge_color2 = document.getElementById("colores2").value;
    var escoge_color3 = document.getElementById("colores3").value;
    var escoge_color4 = document.getElementById("colores4").value;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(escoge_color1, 0, yi, xf, 300);
        
        yi = 300 - (espacio * l);
        dibujarLinea(escoge_color2, 300, yi, xf, 300);
        
        xi = 300 - [espacio * (l + 1)];
        yf = 300 - (espacio * l);
        dibujarLinea(escoge_color3, xi, 0, 300, yf);

        nxi = 300 - yi;
        nyf = 300 - xf;
        dibujarLinea(escoge_color4, nxi, 0, 0, nyf);

        console.log("Linea " + l);

    }

    dibujarLinea(escoge_color1, 1, 1, 1, margen);
    dibujarLinea(escoge_color2, 1, margen, margen, margen);
    dibujarLinea(escoge_color3, margen, 1, margen, 1);
    dibujarLinea(escoge_color3, margen, 1, margen, margen);
    dibujarLinea(escoge_color4, 1, 1, margen, 1);
    
}