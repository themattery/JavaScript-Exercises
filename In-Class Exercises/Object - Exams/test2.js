// acessing objs in arrays
arr = [
    pessoa1 = {
        nome: {
            first: 'Ye',
            last: 'Wenjie'
        },
        cidade: 'Beijing',
        idade: 78
    },
    pessoa2 = {
        nome: {
            first: 'Zhang',
            last: 'Beihai'
        },
        cidade: 'Starhip Earth',
        idade: 54
    },
    pessoa3 = {
        nome: {
            first: 'Luo',
            last: 'Ji'
        },
        cidade: 'Hong Kong',
        idade: 33
    }
]
// console.log(arr[1].idade)
for (let i in arr) {
    console.log(arr[i].idade);
}