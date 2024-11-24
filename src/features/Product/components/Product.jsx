import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";

Product.propTypes = {
  product: PropTypes.object,
};
// Product.defaultProps = {
//   product: {
//     images: [],
//   },
// };
function Product({ product }) {
  const cleanImages = product.images.map((image) =>
    // Xử lý các chuỗi có dấu nháy kép dư thừa
    image.includes('"') ? image.replace(/[\\"[\]]/g, "") : image
  );

  return (
    <Box padding={1}>
      <Box padding={1} minHeight="215px">
        {cleanImages.length > 0 ? (
          <img width="100%" src={cleanImages[0]} alt={product.title} />
        ) : (
          <Skeleton variant="rectangular" width="100%" height={100} />
        )}
      </Box>

      <Typography variant="body2">{product.title}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" marginRight={1}>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(product.price)}
        </Box>
      </Typography>
    </Box>
  );
}
export default Product;
