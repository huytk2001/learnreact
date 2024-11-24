import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import productApi from "../../../Api/productApi"; // Đảm bảo đã import API
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterView from "../components/Filters/FilterView";

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItem: 0,
  });

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    offset: 0, // Vị trí bắt đầu (thường dùng cho phân trang)
    limit: 10, // Số sản phẩm mỗi trang
    _sort: "price:ASC",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll(filter);
        console.log("Fetched response:", response); // Log toàn bộ phản hồi

        // Kiểm tra nếu có dữ liệu trong response
        if (response && response.length > 0) {
          setProductList(response); // Cập nhật danh sách sản phẩm

          // Giả sử tổng số sản phẩm là 100 (có thể thay thế bằng số thực nếu có API cung cấp tổng số sản phẩm)
          const totalItem = 100; // Ví dụ, giả định tổng số sản phẩm là 100
          const totalPages = Math.ceil(totalItem / filter.limit); // Tính tổng số trang

          setPagination({
            currentPage: Math.floor(filter.offset / filter.limit) + 1, // Tính trang hiện tại
            totalPages: totalPages, // Tổng số trang
            totalItem: totalItem, // Tổng số sản phẩm giả định
          });
        } else {
          setProductList([]); // Nếu không có dữ liệu, đặt lại danh sách sản phẩm
        }
      } catch (error) {
        console.error("Failed to fetch product list:", error);
        setProductList([]); // Đặt lại danh sách sản phẩm nếu có lỗi
      }
      setLoading(false); // Dừng trạng thái loading
    })();
  }, [filter]);

  // Cập nhật phân trang khi người dùng chuyển trang
  const handlePageChange = (event, value) => {
    setFilter({
      ...filter,
      offset: (value - 1) * filter.limit, // Tính offset khi thay đổi trang
    });
  };
  const handleSortChange = (newSortValue) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };
  const handleFiltersChange = (newFilters) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...newFilters,
    }));
  };
  const handleFilterNew = (newFilters) => {
    setFilter(filter);
  };
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: "250px" }}>
            <Paper elevation={0}>
              <ProductFilters filters={filter} onChange={handleFiltersChange} />
              <FilterView filter={filter} onChange={handleFilterNew} />
            </Paper>
          </Grid>

          <Grid item sx={{ flex: "1 1 0" }}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filter._sort}
                onChange={handleSortChange}
              />
              {loading ? (
                <ProductSkeletonList /> // Hiển thị skeleton khi đang tải
              ) : (
                <ProductList data={productList} /> // Hiển thị sản phẩm sau khi tải xong
              )}

              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: "center",
                  marginTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <Pagination
                  color="primary"
                  count={pagination.totalPages} // Total number of pages
                  page={pagination.currentPage} // Current page
                  onChange={handlePageChange} // Page change handler
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
