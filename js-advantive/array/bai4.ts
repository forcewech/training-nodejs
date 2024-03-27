/*
Bài 4: Viết hàm getAverageAge(users) 
lấy một mảng đối tượng có thuộc tính tuổi và trả về tuổi trung bình.
có sử dụng method reduce của array
*/
const arrUsers1 = [
    {
        id: "1",
        name: "Dung",
        age: 18
    },
    {
        id: "2",
        name: "Truong",
        age: 20
    }
]

const getAverageAge = (users):number => {
    const totalAge = users.reduce((total, value) => {
        total += value.age;
    }, 0)
    return totalAge/users.length
}
getAverageAge(arrUsers1)