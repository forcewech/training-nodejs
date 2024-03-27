/*Bài 5: 
const url = "https://jsonplaceholder.typicode.com/posts/1";
const fetchData = () => {
  // TODO: Sử dụng fetch để gọi một API và trả về dữ liệu dưới dạng Promise
};
fetchData()
  .then((data) => {
    // TODO: Xử lý dữ liệu thành công và in ra dữ liệu
  })
  .catch((error) => {
    // TODO: Xử lý lỗi và in ra lỗi
  });
*/
const url = "https://jsonplaceholder.typicode.com/posts/1";
const fetchData = async (url: string): Promise<Response> => {
  return fetch(url);
};
fetchData(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error)
  });