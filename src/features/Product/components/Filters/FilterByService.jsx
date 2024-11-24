import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { boolean } from "yup";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[500]}`, // Correct string interpolation
      })}
    >
      <Typography variant="subtitle2">Dịch Vụ</Typography>

      <Box
        sx={(theme) => ({
          padding: 0,
          margin: 0,
          listStyleType: "none",
          "&>li": {
            margin: 0,
          },
        })}
      >
        {[
          { value: "isPromotion", label: "Có Khuyến Mãi" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((service) => (
          <li key={service}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={boolean[filters[service.value]]}
                  onChange={handleChange}
                  name={service.value} // Dynamically set the name
                  color="primary"
                />
              }
              label={service.label} // Dynamic label text
            />
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default FilterByService;
