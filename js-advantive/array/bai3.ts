/*
Bài 3: Bạn có một mảng các đối tượng người dùng, 
mỗi đối tượng có name, surname và id. 
Viết code để tạo một mảng khác từ nó, 
gồm các đối tượng có id và fullName, trong đó fullName được tạo từ name và surname. 
Sử dụng các method của array
*/
interface IUser {
    id: string
    fullname: string
}
const arrUsers = [
    {
        id: "1",
        name: "Dung",
        surname: 'Tien'
    },
    {
        id: "2",
        name: "Truong",
        surname: 'Van'
    }
]
const newArrUsers = arrUsers.map((item):IUser => {
    return {
        id: item.id,
        fullname: item.name + item.surname
    }
})
