'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    return array.filter(element => element !== item);
}
const newArray = removeElement(array, 5);
console.log(newArray);
