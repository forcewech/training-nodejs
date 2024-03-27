/*
Bài 1: Viết một hàm taoTaiKhoan nhận số dư ban đầu 
và trả về một đối tượng có thể gọi các phương thức napTien và rutTien để thực hiện giao dịch.
*/

interface ICreateAccount{
    topUp(money:number): number
    withDraw(money:number): number
}
function createAccount(initialBalance: number):ICreateAccount {
    return {
        topUp(money:number):number {
            initialBalance += money
            return initialBalance
        },
        withDraw(money:number):number {
            initialBalance -= money
            return initialBalance
        }
    }
  } 
const account = createAccount(1000);
account.topUp(500)
account.withDraw(200)