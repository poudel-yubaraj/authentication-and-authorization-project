import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogOut = () => {
    console.log(localStorage.getItem('token'));
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged Out');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const fetchProducts = async () => {
    try {
      const url = 'http://localhost:5000/products';
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.log(result);
      if(result.success){
        setProducts(result);
      }
      console.log("this is product",products);
    } catch (err) {
      console.log(err);
      handleError(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-200 to-sky-500">
      <div className="text-3xl font-bold">Welcome {loggedInUser}</div>
      <button
        className="bg-white p-2 m-2 rounded-3xl font-semibold"
        onClick={handleLogOut}
      >
        LogOut
      </button>

      <ol className="list-decimal mt-4">
        
      {  products.map((item, index)=>{
        return <li><span>{item.name}:{item.price}</span></li>
      })}
      </ol>
      <ToastContainer/>
    </div>
  );
};

export default Profile;
