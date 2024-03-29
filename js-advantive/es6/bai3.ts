/*Bài 3: 
const user = { name: 'John', email: 'john@example.com' };
viết arrow function sử dụng Destructuring Assignment để in ra tên + email
*/
const user = { name: 'John', email: 'john@example.com' };
const showInfoUser = ():string => {
    const {name, email} = user;
    return `Tên của bạn là: ${name} với email: ${email}`
}