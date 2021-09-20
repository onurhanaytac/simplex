// import { Quote } from "./quotes.type";
import QuotesDAL from "./quotes.dal";
import { PairPayload, QuotePayload, Response } from "./quotes.type";

export default class QuotesService {
  quotesDAL: QuotesDAL;

  constructor() {
    this.quotesDAL = new QuotesDAL();
  }

  async getCodes(): Promise<Response> {
    return this.quotesDAL.getCodes();
  }

  async getPair(payload: PairPayload): Promise<Response> {
    const { data, error } = await this.quotesDAL.getPair(payload);
    const { result, conversion_rate, conversion_result } = data || {};

    return {
      data: {
        result,
        exchangeRate: conversion_rate,
        quoteAmount: Math.round(conversion_result),
        calculatedAmount: Math.round(conversion_rate * payload.baseAmount)
      },
      error
    };
  }

  async getQuote(payload: QuotePayload): Promise<Response> {
    const { data, error } = await this.quotesDAL.getQuote(payload);
    const { result, conversion_rate } = data || {};
    const rate = Math.round((conversion_rate + Number.EPSILON) * 1000) / 1000;

    return {
      data: {
        result,
        exchangeRate: rate,
        quoteAmount: Math.round(rate * payload.baseAmount)
      },
      error
    };
  }
}
