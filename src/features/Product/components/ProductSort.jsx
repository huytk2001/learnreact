import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired, // Change to string
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="Sort products by price"
    >
      <Tab label="Giá thấp tới cao" />
      <Tab label="Giá cao tới thấp" />
    </Tabs>
  );
}

export default ProductSort;
