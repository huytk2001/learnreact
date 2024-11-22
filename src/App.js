// App.js
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import productApi from "./Api/productApi";
import Header from "./components/Header";
// import { useSnackbar } from "notistack";
import ListPage from "./features/Todo/Page/ListPage";
import DetailPage from "./features/Todo/Page/DetailPage";
import CounterFeater from "./features/Counter";
import ProductFeature from "./features/Product";
function App() {
  // const { enqueueSnackbar } = useSnackbar();
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 20,
  //     };
  //     const productsList = await productApi.getAll(params);
  //     console.log("====================================");
  //     console.log(productsList);
  //     console.log("====================================");
  //   };
  //   fetchProducts();
  // }, []);
  // const showNoti = () => {
  //   enqueueSnackbar("", { variant: "success" });
  // };
  // const showNoti = () => {
  //   enqueueSnackbar("Thông báo thành công!", { variant: "success" });
  // };
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          {" "}
          <Route path="/todo" element={<ListPage />} />
          <Route path="/todos/:todoId" element={<DetailPage />} />
          <Route path="/" element={<CounterFeater />} />
          <Route path="/products" element={<ProductFeature />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
