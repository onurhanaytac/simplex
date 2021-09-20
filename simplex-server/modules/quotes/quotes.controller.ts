/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import QuotesService from "./quotes.service";
import { PairRequest } from "./quotes.type";
import { cache, ratesCache, codesCache } from "../../middlewares";

const router = Router();
const quotesService = new QuotesService();

router.get("/codes", codesCache, async (req, res) => {
  const { error, data } = await quotesService.getCodes();

  if (error || data?.result === "error") {
    return res.status(500).send(error);
  }

  cache.set("codes", data);
  res.status(200).send(data);
});

router.get("/pair", async (req: PairRequest, res) => {
  const { error, data }: any = await quotesService.getPair(req.query);

  if (error || data?.result === "error") {
    return res.status(500).send(error);
  }

  res.status(200).send(data);
});

router.get("/quote", ratesCache, async (req: PairRequest, res) => {
  const { error, data }: any = await quotesService.getQuote(req.query);

  if (error || data?.result === "error") {
    return res.status(500).send(error);
  }

  cache.set(`${req.query.baseCurrency}:${req.query.quoteCurrency}`, data);
  res.status(200).send(data);
});

export default router;
