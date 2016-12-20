var minUsadosLlamada, precioMinuto, precioLLamada;
function ingreseDatos() {
    minUsadosLlamada = prompt("Por favor, minutos usados en llamada");
    precioMinuto = prompt("Por favor, ingresa el precio por minuto ");
}
function calcularPrecioLlamada(){
    precioLLamada = parseFloat(minUsadosLlamada)*parseFloat(precioMinuto);
    alert(precioLLamada);
}

