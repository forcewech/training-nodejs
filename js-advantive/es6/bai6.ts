/*Bài 6: 
*/
interface IData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  const apiUrl: string = "https://jsonplaceholder.typicode.com/posts/1";
  
  const fetchData2 = async (url: string): Promise<IData> => {
    try {
      const response = await fetch(url); 
      const data: IData = await response.json(); 
      return data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };
  
  fetchData2(apiUrl)
    .then((data: IData) => {
      console.log(data); 
    })
    .catch((error: any) => {
      console.error('Error:', error); 
    });