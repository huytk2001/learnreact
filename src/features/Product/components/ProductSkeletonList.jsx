import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container spacing={2}>
        {Array.from({ length }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
