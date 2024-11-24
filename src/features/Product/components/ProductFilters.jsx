import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FiltersByCategory from "./Filters/FiltersByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleFiltersChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilter = {
      categoryId: newCategoryId,
    };
    onChange(newFilter);
  };
  const handlePriceChange = (values) => {
    console.log(values);
    if (onChange) {
      onChange(values);
    }
  };
  const handleService = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <div>
      <Box>
        <FiltersByCategory onChange={handleFiltersChange} />
        <FilterByPrice onChange={handlePriceChange} />
        <FilterByService filters={filters} onChange={handleService} />
      </Box>
    </div>
  );
}

export default ProductFilters;
