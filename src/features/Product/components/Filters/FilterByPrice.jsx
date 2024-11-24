import React, { useState } from "react";
import PropTypes, { object } from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    price_min: 0,
    price_max: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(values);
    if (onChange) onChange(values);
  };
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[500]}`, // Correct string interpolation
      })}
    >
      <Typography variant="subtitle2">Giá</Typography>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexFlow: "row nowrap",

          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          alignItems: "center",
          "& > span": {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
        })}
      >
        <TextField
          name="price_min"
          value={values.price_min}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="price_max"
          value={values.price_max}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>{" "}
    </Box>
  );
}

export default FilterByPrice;
