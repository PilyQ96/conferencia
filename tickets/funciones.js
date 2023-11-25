// Resumen de compra
function resumenCompra(){
    event.preventDefault();
    let cantEntradas;
    let total;
    let categoria;
    let entradaGeneral;
    let entradaEstudiante;
    let entradaTrainee;
    let entradaJunior;

    cantEntradas = document.getElementById('cantidad_boletos').value;
    categoria = document.getElementById('descuento').value;

    entradaGeneral = 200;
    entradaEstudiante = 200-(200*0.8);
    entradaTrainee = 200 - (200*0.5);
    entradaJunior = 200 - (200*0.15);

    if (categoria == 'none'){
        total = entradaGeneral * cantEntradas;
    }else if (categoria == 'estudiante'){
        total = entradaEstudiante * cantEntradas;
    }else if (categoria == 'trainee'){
        total = entradaTrainee * cantEntradas;
    }else if (categoria == 'junior'){
        total = entradaJunior * cantEntradas;
    }

    document.getElementById('precioTotal').innerHTML = 'Total a pagar $ ' + total;
}
var resumenF = document.getElementById('resumen');
resumenF.addEventListener('click', resumenCompra);


