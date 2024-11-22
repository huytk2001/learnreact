import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import productApi from "../../../Api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll({ offset: 0, limit: 10 });
        console.log("Fetched response:", response); // Log the entire response

        // Check if response.data exists before setting state
        if (response) {
          setProductList(response); // Set product list
        } else {
          console.error("No data found in the response");
          setProductList([]); // Ensure productList is set to empty array if no data
        }
      } catch (error) {
        console.error("Failed to fetch product list:", error);
        setProductList([]); // Ensure productList is set to empty array in case of error
      }
      setLoading(false); // Stop loading state
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: "250px" }}>
            <Paper elevation={0}>Left</Paper>
          </Grid>

          <Grid item sx={{ flex: "1 1 0" }}>
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList /> // Hiển thị skeleton khi đang tải
              ) : (
                <ProductList data={productList} /> // Hiển thị sản phẩm sau khi tải xong
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
