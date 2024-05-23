import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../Store/slice/CounterSlice";

const Counter = () => {
  const values = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        decrease count
      </Button>
      <Typography variant="h3">Count:{values.count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        increase count
      </Button>
    </Box>
  );
};

export default Counter;
