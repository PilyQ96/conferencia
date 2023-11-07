//Resumen de compra

document.getElementById('resumen').addEventListener(click, function() {
    const cantBoletos = parseInt(document.getElementById('cantidad_boletos').value);
    const descuentoxcategoria = document.getElementById('descuento').value;
    const totalFinal = document.getElementById('precioTotal');
    let discount = 0;

    switch (descuentoxcategoria) {
        case "None":
            discount = 0;
            break;
        case "estudiante":
            discount = 0.8;
            break;
        case "trainee":
            discount = 0.5;
            break;
        case "junior":
            discount = 0.15;
            break;
        default:
            console.log("Opción no reconocida");
    }

    const total = cantBoletos * 200;
    const totalCdescuento = total - (total*discount);
    totalFinal.textContent = totalCdescuento.toFixed(2);

});


