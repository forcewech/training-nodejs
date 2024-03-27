/*
Bài 2: Viết một hàm filterRangeInPlace(arr, a, b) 
lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị
ngoại trừ những giá trị nằm giữa a và b.
Nghiệm là: a ≤ arr [i] ≤ b.
ví dụ: arr = [ 1,3,4,5]
filterRangeInPlace(arr, 1,3)
console.log(arr) => [1,3]
*/
const arr2: number[] = [1, 3, 4, 5];
function filterRangeInPlace(arr: number[], a: number, b: number): Array<Number> {
    const newArr2 = arr.filter((item) => {
        return item >= a && item <= b;
    })
    return newArr2
}
filterRangeInPlace(arr2, 1, 3);