/*
Bài 1: Sử dụng arrow function để tính tổng các phần tử trong mảng
*/
const arr1 = [1,2,3,4,5,6]
arr1.reduce((total: number, value: number): number => {
    return total += value
})
