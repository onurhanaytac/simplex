/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";

import { cache, ratesCache, codesCache } from "../../middlewares";
import QuotesDAL from "./quotes.dal";
import QuotesService from "./quotes.service";
import { PairRequest } from "./quotes.type";

const router = Router();
const quotesService = new QuotesService(new QuotesDAL());

router.get("/codes", codesCache, async (req, res) => {
  const { error, data }: any = await quotesService.getCodes();

  if (error || data?.result === "error") {
    return res.status(error.status).send(error.statusText);
  }

  cache.set("codes", data);
  res.status(200).send(data);
});

router.get("/quote", ratesCache, async (req: PairRequest, res) => {
  const { error, data }: any = await quotesService.getQuote(req.query);

  if (error || data?.result === "error") {
    return res.status(error.status).send(error.statusText);
  }

  cache.set(`${req.query.baseCurrency}:${req.query.quoteCurrency}`, data);
  res.status(200).send(data);
});

export default router;
