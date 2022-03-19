const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function map(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', map(nums, maca));

console.log('this -> laranja', map(nums, laranja));