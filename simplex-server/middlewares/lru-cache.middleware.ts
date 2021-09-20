/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LRU } from "../scripts";

export const cache = new LRU();

export const ratesCache = (req: any, res: any, next: () => void) => {
  const {
    query: { baseCurrency, quoteCurrency, baseAmount }
  } = req;
  const quote: any = cache.get(`${baseCurrency}:${quoteCurrency}`);

  if (!quote) {
    return next();
  }

  res.status(200).send({
    ...quote,
    quoteAmount: Math.round(quote.exchangeRate * baseAmount)
  });
};

export const codesCache = (req: any, res: any, next: () => void) => {
  const codes: any = cache.get("codes");

  if (!codes) {
    return next();
  }

  res.status(200).send(codes);
};
