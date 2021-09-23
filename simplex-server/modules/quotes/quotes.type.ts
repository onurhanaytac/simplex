/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Response {
  data?: any;
  error?: {
    status: number | string;
    statusText: string;
  };
}

export interface Quote {
  result: string;
  exchangeRate: number;
  quoteAmount: number;
}

export interface PairPayload {
  baseCurrency: string;
  quoteCurrency: string;
  baseAmount: number;
}

export interface QuotePayload {
  baseCurrency: string;
  quoteCurrency: string;
  baseAmount: number;
}

export interface PairRequest {
  query: PairPayload;
}

export type CodesResponse = [string[]];
