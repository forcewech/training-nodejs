/*Bài 1: Viết class user gồm fistName, lastName,age 
và một hàm getAverageAge(users) lấy một mảng đối tượng 
có thuộc tính tuổi và trả về tuổi trung bình. 
có sử dụng method reduce của array.
*/

class User {
    private firstName: string
    private lastName: string
    private age: number
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
} 

const users = [
    new User("Dung", "Tien", 22),
    new User("Truong", "Xuan", 25),
    new User("Hoang", "Minh", 18)
]

function getAverage(users):number {
    const totalAge = users.reduce((accumulator, currentUser) => accumulator + currentUser.age, 0);
    return totalAge/users.length
}
