// Funcion que formatea el dinero de internacionalizacion de js
const formatearDinero = (valor) => {
    //Esta es una API de internacionalizacion en JS
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency', // currency o dinero
        currency: 'USD' // y la moneda va a ser dolares
    });

    return formatter.format(valor); 
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor es la cantidad, menor es el interes
    if(cantidad < 5000) {
        total = cantidad * 1.5; // 50% de interes
    } else if(cantidad >=5000 && cantidad < 10000) {
        total = cantidad * 1.4; // 40% de interes
    } else if(cantidad >=10000 && cantidad < 15000) {
        total = cantidad * 1.3; // 30% de interes
    } else { // En caso de que sea ya mayor a 15000
        total = cantidad * 1.2; // 20% de interes
    }

    // Plazo - mas plazo mayor interes
    if(plazo === 6) {
        total *= 1.1; // 10% mas
    } else if(plazo === 12) {
        total *= 1.2; // 20% mas
    } else {
        total *= 1.3; // 30% mas
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar,
}