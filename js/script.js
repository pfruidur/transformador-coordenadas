/* // Codigo copiado de la Guia de Estudio:
function conviertePunto() {
    console.debug("aqui trasnformaremos las coordenadas");
    //Definimos los sistemas de referencia de entrada y salida
    var epsgEntrada = proj4("EPSG:25831");
    var epsgSalida = proj4("EPSG:4326");
    console.debug(epsgEntrada);
    console.debug(epsgSalida);

    //obtenemos el valor de entrada del punto
    var coordenadaX = parseFloat(document.getElementById("entradaX").value);
    var coordenadaY = parseFloat(document.getElementById("entradaY").value);

    // creamos el punto de entrada con los valores del formulario
    var pEntrada = proj4.toPoint([coordenadaX, coordenadaY]);
    console.debug(pEntrada);

    // transformamos las coordenadas del punto de entrada
    var pSalida = proj4(epsgEntrada, epsgSalida, pEntrada);
    console.debug(pSalida);

    //mostramos el resultado en los campos de salida
    document.getElementById("salidaX").value = pSalida.x;
    document.getElementById("salidaY").value = pSalida.y;
} */

/* Esta función coge el valor del select y en función del mismo logea un resultado diferente. */
/* function pruebaSelect() {
    let opcionSelect = document.getElementById("opcion").value;
    console.log(opcionSelect);
    if (opcionSelect === "a") {
        epsgEntrada = proj4("EPSG:25830")
        console.log('elegiste EPSG:25830')
    } else {
        epsgEntrada = proj4("EPSG:25831")
        console.log('elegiste EPSG:25831')
    }
}
 */
function conviertePunto() {
    let opcionSelect = document.getElementById("opcion").value;
    let epsgSalida;
    console.log(opcionSelect);
    if (opcionSelect === "EPSG:25830") {
        epsgSalida = proj4("EPSG:25830")
        console.log('elegiste EPSG:25830')

    } else if (opcionSelect === "EPSG:3034") {
        epsgSalida = proj4("EPSG:3034")
        console.log("EPSG:3034")

    } else if (opcionSelect === "EPSG:25829") {
        epsgSalida = proj4("EPSG:25829")
        console.log("EPSG:25829")

    } else {
        epsgSalida = proj4("EPSG:25831")
        console.log('elegiste EPSG:25831')
    }

    console.debug("aqui transformamos coordenadas");
    /* let epsgEntrada = proj4("EPSG:25831"); */
    let epsgEntrada = proj4("EPSG:4326");
    console.debug(epsgEntrada);
    console.debug(epsgSalida);

    let coordenadaX = parseFloat(document.getElementById("entradaX").value);
    let coordenadaY = parseFloat(document.getElementById("entradaY").value);

    let pEntrada = proj4.toPoint([coordenadaX, coordenadaY]);
    console.debug(pEntrada);
    let pSalida = proj4(epsgEntrada, epsgSalida, pEntrada);
    console.debug(pSalida);

    document.getElementById("salidaX").value = pSalida.x;
    document.getElementById("salidaY").value = pSalida.y;

    let textoResultado = `Resultado de la transformación de las coordenadas en <strong>EPSG:4326</strong><br>${coordenadaX}, ${coordenadaY}<br><br>al <strong>${opcionSelect}</strong><br>${pSalida.x}, ${pSalida.y}`;

    let theDiv = document.getElementById("resultado");

    theDiv.innerHTML = textoResultado;

    console.log(textoResultado);
    console.log(proj4(epsgEntrada))

}