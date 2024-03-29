/*
Bài 1: Viết một hàm filterRange(arr, a, b) lấy một mảng arr.
tìm kiếm các phần tử giữa a và b trong đó và trả về một mảng trong số đó. 
Không sửa đổi mảng. Trả về mảng mới. 
*/
const arr = [5,2,3,4,1,6]
const filterRange = (arr: Array<number>, a:number, b:number):Array<number> => {
    const newArr = arr.filter((item) => {
        return item > a && item < b;
    })
    return newArr
}
console.log(filterRange(arr,2,6));