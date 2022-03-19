function filtraPares(arr) {
    return arr.filter((item) => item % 2 === 0);
}

const array = [1, 23, 555, 70, 80, 100];

console.log(filtraPares(array));