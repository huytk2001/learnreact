import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

FilterView.propTypes = {
  filters: PropTypes.object,
  onchange: PropTypes.func,
};
const FILTER_LIST=[{
    id:1,
    getLabel:(filters)=>'',
    isActive:(filters)=>true

}]
function FilterView({ filters = {}, onchange }) {
  return (
    <Box
      component="ul"
      sx={(theme) => ({
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
        margin: theme.spacing(2, 0),
        listStyleType: "none",
        '& > li'{
            margin:0,
            padding:theme.spacing(1)
        }
      })}
    ></Box>
  );
}

export default FilterView;
