import { Button, Grid, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
const Firms = () => {
  const { getStockData } = useStockCall();

  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error">
        Firm
      </Typography>
      <Button variant="contained">New Firm</Button>

      <Grid container>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
