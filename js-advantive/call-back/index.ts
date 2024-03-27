/*Bài tập: Bạn có việc phải đi công tác xa nhà. 
Bạn dặn người yêu, trong thời gian bạn đi, nếu như có ai giao quà tới, 
hãy đem qua tặng em gái dễ thương hàng xóm.*/

function layQua(callback){
    setTimeout(() => {
    console.log('Lấy quà từ shipper')
    callback()
    }, 3000)
}
function tangQua(){
    console.log('Tao tặng mày nè!')
}
layQua(tangQua);