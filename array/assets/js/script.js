// declaração de array
let array = ['Livio', 1, true];
console.log(array);

// array declarado dentro de outro array
let array2 = [['conta1'], ['conta2'], 1, 'novo'];
console.log(array2);

//forEach itera um array
array.forEach(function(item, index){console.log(item, index)});

//push add item no final do array
array.push('novo item');
console.log(array);

//pop remove ao final da array
array.pop();
console.log(array);

//shift remove no inicio da array
array.shift();
console.log(array);

// unshift adiciona novo item no inicio do array
array.unshift('novo item no inicio');
console.log(array);

// indexOf retorna o indice de um valor
console.log(array.indexOf('novo item no inicio'));

// splice remove ou substitui um item pelo indice
array.splice(0, 3);
console.log(array);

// slice retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

// objetos
var object = { string: 'string', number: 1, Boolean: true, _array: ["array"], ObjectInterno: {ObjectInterno: 'objeto interno'}, string: "string"};
console.log(object);
console.log(object.string);

// desestruturando um objeto
var {string, number, Boolean, _array} = object;
console.log(string, number, Boolean, _array);