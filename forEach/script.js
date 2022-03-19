function _forEach(arr, index) {
    console.log('elemento [', index , '] =', arr * 2);
}

const nums = [2, 4, 6, 8, 10];

nums.forEach(_forEach);