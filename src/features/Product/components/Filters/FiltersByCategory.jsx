import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Category } from "@mui/icons-material";
import categoryApi from "../../../../Api/categoryApi";

FiltersByCategory.propTypes = {
  onChange: PropTypes.func,
};
function FiltersByCategory({ onChange }) {
  const [categoryList, SetCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        console.log(list);
      } catch (error) {
        console.log("Failed to fetch Category List", error);
      }
    })();
  }, []);
  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box>
      <Typography>DANH MỤC SẢN PHẨM</Typography>
      <ul>
        {categoryList.map((category) => (
          <li key={category.id} onClick={handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FiltersByCategory;
