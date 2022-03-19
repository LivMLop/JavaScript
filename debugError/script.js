function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError(`Parâmetros não enviado: ${arr}`);

        if (typeof arr !== 'object') throw new TypeError(`O array ${arr.typeof} não é do tipo object.`);

        if (typeof num !== 'number') throw new TypeError(`Valor informado: ${num} não é do tipo numérico.`);

        if (arr.length !== num) throw new RangeError(`O valor informado (${num}) é diferente do tamanho do array ${arr.length}`);

        else console.log('O array informado: ', arr);


    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError:');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('TypeError:');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('RangeError:');
            console.log(e.message);
        } else console.log('Error não esperado: '+ e + '\nReinicie a aplicação.');

    }
}

validaArray(['hora'], 1);