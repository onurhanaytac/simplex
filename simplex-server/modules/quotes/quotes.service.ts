// import { Quote } from "./quotes.type";
import QuotesDAL from "./quotes.dal";
import { QuotePayload, Response } from "./quotes.type";

export default class QuotesService {
  quotesDAL: QuotesDAL;

  constructor(_quotesDAL: QuotesDAL) {
    this.quotesDAL = _quotesDAL;
  }

  async getCodes(): Promise<Response> {
    return this.quotesDAL.getCodes();
  }

  async getQuote(payload: QuotePayload): Promise<Response> {
    const { data, error } = await this.quotesDAL.getQuote(payload);
    if (error) {
      return {
        data: null,
        error
      };
    }

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
