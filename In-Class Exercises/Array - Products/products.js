items = [
    [1, 10.0, 2],
    [2, 10.0, 2],
    [3, 10.0, 2],
    [4, 10.0, 0]
];

function valorFinal(items){
    let valor = 0
    for (let i of items){
        valor += i[1]*i[2]
    }
    return valor
}

function maiorQueZero(items){
    let mQzero = []
    for (let i = 0; i<items.length; i++) {
        if (items[i][2] > 0) {
            mQzero.push([items[i][0], items[i][1]])
        }
    }
    return mQzero;
}

function subTotal(items){
    let subtotal = []
    for (i = 0; i<items.length; i++) {
        let linhaSubtotal = items[i][1]*items[i][2];
        subtotal.push([items[i][0], linhaSubtotal]);
    }
    return subtotal
}

console.table(maiorQueZero(items))