    /*var minUsadosLlamada, precioMinuto, precioLLamada;
    alert("Calculando el pago de llamada telefónica");
    minUsadosLlamada = prompt("Por favor, minutos usados en llamada");
    precioMinuto = prompt("Por favor, ingresa el precio por minuto ");

    precioLLamada = parseFloat(minUsadosLlamada)*parseFloat(precioMinuto);

    alert("La llamada le cuesta: " + precioLLamada + " soles");*/
    var minUsadosLlamada, precioMinuto, precioLLamada;
function ingreseDatos() {
    minUsadosLlamada = prompt("Por favor, minutos usados en llamada");
    precioMinuto = prompt("Por favor, ingresa el precio por minuto ");
}
function calcularPrecioLlamada(){
    precioLLamada = parseFloat(minUsadosLlamada)*parseFloat(precioMinuto);
    alert(precioLLamada);
}

