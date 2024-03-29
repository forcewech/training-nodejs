/*
bài 6: Cho mảng sau 
[ 
{ id : 15 }, { id : - 1 }, { id : 0 }, { id : 3 },  
  { id : '12' }, { id : null }, { id : NaN }, { id : 'undefined' } 
] 

Lọc ra các giá trị id là số dương trong mỗi object. 
*/
const arr6 = [ 
    { id : 15 }, { id : - 1 }, { id : 0 }, { id : 3 },  
      { id : '12' }, { id : null }, { id : NaN }, { id : 'undefined' } 
] 
const filterArr6 = arr6.filter((item) => {
    return Number(item.id) > 0 && typeof item.id === 'number'
})
