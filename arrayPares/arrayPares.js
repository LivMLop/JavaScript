function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for(let index = 0; index < array.length; index++) {
        if (array[index] === 0) {
            console.log('Você já é zero!');
        }else if (array[index] % 2 === 0) {
            console.log(`Substituindo ${array[index]} por 0...`);
            array[index] = 0;
        }
    }

    return array;
}

let entradaArray = [1, 3, 4, 6, 80, 33, 23, 90, 102, 101];
console.log('Substituição concluída:\n', substituiPares(entradaArray));