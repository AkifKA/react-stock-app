import { Button, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
const Firms = () => {
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  );
};

export default Firms;
