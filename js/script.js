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