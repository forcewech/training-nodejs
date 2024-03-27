/*Bài 7:
*/
const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";
interface IData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
const fetchData3 = async (url: string):Promise<IData> => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data;
  } catch (error) {
    throw error
  }
};
const mainFunction = async () => {
  try {
    const [data1, data2] = await Promise.all([fetchData3(apiUrl1), fetchData3(apiUrl2)])
  } catch (error) {
    throw error
  }
};
mainFunction()