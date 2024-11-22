import React from "react";

import ListPage from "./page/ListPage";
import { Box } from "@mui/material";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <ListPage />
    </Box>
  );
}

export default ProductFeature;
