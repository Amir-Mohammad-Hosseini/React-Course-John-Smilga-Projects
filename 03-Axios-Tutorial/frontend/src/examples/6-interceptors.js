import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = "http://localhost:5000/api/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("/react-store-products")
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
