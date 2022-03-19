const meuArray = [30, 30, 40, 5, 10, 11, 10, 200, 201, 40, 11];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));