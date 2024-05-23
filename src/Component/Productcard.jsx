import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProductCard = () => {
  const values = useSelector((state) => state.counter);
  console.log(values);
  return (
    <div>
      <Typography> ProductCard</Typography>
      <Typography variant="h5">{values.count}</Typography>
    </div>
  );
};

export default ProductCard;
