// App.js
import React, { useEffect } from 'react';
import TodoFeature from './features/Todo';
import productApi from './Api/productApi';
import Header from './components/Header';
function App() {
  useEffect(()=>{
    const fetchProducts = async()=>{
      const params={
        _limit:10
      }
      const productsList= await productApi.getApp(params)
      console.log('====================================');
      console.log(productsList);
      console.log('====================================');
    }
    fetchProducts()
  },[])
return (
  <>
    <Header />
    <TodoFeature />
  </>
);

}

export default App;
