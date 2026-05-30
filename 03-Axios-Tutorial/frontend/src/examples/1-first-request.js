import { useEffect } from 'react';
import axios from "axios"
// limit, if 429 wait for 15 min and try again
const url = 'http://localhost:5000/api/react-store-products';

const fetchData = async() => {
  try {
    const response = await axios(url)
    const data = response.data
  } catch (error) {
    console.log(error.response)
  }
}

const FirstRequest = () => {
  useEffect(() => {
  
    fetchData()

  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
