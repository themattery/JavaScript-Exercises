// Testing on objs/dicts -- acessing
let pessoa = {
    nome: {
        first: 'Paulo',
        lastName: 'Mendes'
    },
    idade: 10,
    cidade: 'Perelandra'
}

for (let i in pessoa) {
    console.log(pessoa[i])
}

// console.log(pessoa['idade'])