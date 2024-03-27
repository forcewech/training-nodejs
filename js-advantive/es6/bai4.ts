/*
Bài 4: 
const concatenateArrays = (arr1, arr2) => {
    // TODO: Sử dụng spread operator để nối hai mảng lại với nhau
};
*/
const arr01 = [1,2,3];
const arr02 = [1,2,3]
const concatenateArrays = (arr1:Array<number>, arr2:Array<number>): Array<number> => {
    return [...arr01,...arr02]
};
concatenateArrays(arr01, arr02)