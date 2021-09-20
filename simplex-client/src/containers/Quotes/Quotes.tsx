import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Grid, InputLabel, Paper, TextField } from "@mui/material";

import * as store from "../../store";
import { Dropdown, NumberField } from "~/components";

const Quotes = () => {
  const dispatch = useDispatch();
  const codes: string[] = useSelector(store.getCodes) || ["USD", "EUR"];
  const quote: any = useSelector(store.getQuote);
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [quoteCurrency, setQuoteCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>();

  const onChangeBase = (event: any, { props: { value } }: any): void => {
    setBaseCurrency(value);
  };

  const onChangeQuote = (event: any, { props: { value } }: any): void => {
    setQuoteCurrency(value);
  };

  const onChangeAmount = ({ target: { value } }: any) => {
    setAmount(value);
  };

  useEffect(() => {
    if (
      !baseCurrency ||
      !quoteCurrency ||
      !amount ||
      isNaN(Number(amount)) ||
      !Number(amount)
    ) {
      return;
    }

    dispatch(
      store.GetQuote({
        baseCurrency: baseCurrency,
        quoteCurrency: quoteCurrency,
        baseAmount: amount
      })
    );
  }, [baseCurrency, quoteCurrency, amount]);

  useEffect(() => {
    dispatch(store.GetCodes());
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100%",
          background: "#eef1f8"
        }}
      >
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{
              maxWidth: "600px"
            }}
          >
            <Grid item xs={4}>
              <NumberField
                label="Base Amount"
                onChange={_.debounce(onChangeAmount, 500)}
              />
            </Grid>
            <Grid item xs={4}>
              <Dropdown
                label="Base Currency"
                data={codes}
                value={baseCurrency}
                onChange={onChangeBase}
              />
            </Grid>
            <Grid item xs={4}>
              <Dropdown
                label="Quote Currency"
                data={codes}
                value={quoteCurrency}
                onChange={onChangeQuote}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{
              maxWidth: "600px",
              marginTop: "20px"
            }}
          >
            {quote?.exchangeRate && quote?.quoteAmount ? (
              <>
                <Grid item xs={6}>
                  <InputLabel id="text-field-label">Conversion Rate</InputLabel>
                  <TextField
                    type="number"
                    value={quote?.exchangeRate}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="text-field-label">
                    Expected Amount ({quoteCurrency})
                  </InputLabel>
                  <TextField
                    value={quote?.quoteAmount}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
              </>
            ) : null}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Quotes;
