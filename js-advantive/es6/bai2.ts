/*Bài 2: const greetPerson = (name, age) => {
  TODO: Sử dụng template literals để tạo câu chào mừng
};
*/
const  greetPerson = (name: string, age: number):string => {
    return `Chào mừng ${name} tuổi ${age}`
}

greetPerson("Truong", 25)