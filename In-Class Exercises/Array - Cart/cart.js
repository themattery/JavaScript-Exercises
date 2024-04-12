cart = [
    ['Bicicleta', 1200.00],
    ['Capacete', 450.00]
];

function valorFinal(cart) {
    let valorFinal = 0;
    for (i of cart) {
        valorFinal+=i[1]
    }
    return valorFinal;
}
total = valorFinal(cart);
console.log(`Valor final: R$${total.toFixed(2)}.`)