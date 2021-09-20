import { Action } from "../../types";

/**
 * Gets currency codes
 */
export const GET_CODES = "[Quotes] Get Codes";
export const GET_CODES_FAIL = "[Quotes] Get Codes Fail";
export const GET_CODES_SUCCESS = "[Quotes] Get Codes Success";

interface GetCodes extends Action {
  readonly type: "[Quotes] Get Codes";
}

interface GetCodesFail extends Action {
  readonly type: "[Quotes] Get Codes Fail";
  payload: any;
}

interface GetCodesSuccess extends Action {
  readonly type: "[Quotes] Get Codes Success";
  payload: any;
}

export const GetCodes = () => ({
  type: GET_CODES
});

export const GetCodesFail = (payload: any): GetCodesFail => ({
  type: GET_CODES_FAIL,
  payload
});

export const GetCodesSuccess = (payload: any): GetCodesSuccess => ({
  type: GET_CODES_SUCCESS,
  payload
});

/**
 * Gets pair
 */
export const GET_PAIR = "[Quotes] Get Pair";
export const GET_PAIR_FAIL = "[Quotes] Get Pair Fail";
export const GET_PAIR_SUCCESS = "[Quotes] Get Pair Success";

interface GetPair extends Action {
  readonly type: "[Quotes] Get Pair";
}

interface GetPairFail extends Action {
  readonly type: "[Quotes] Get Pair Fail";
  payload: any;
}

interface GetPairSuccess extends Action {
  readonly type: "[Quotes] Get Pair Success";
  payload: any;
}

export const GetPair = (payload: any) => ({
  type: GET_PAIR,
  payload
});

export const GetPairFail = (payload: any): GetPairFail => ({
  type: GET_PAIR_FAIL,
  payload
});

export const GetPairSuccess = (payload: any): GetPairSuccess => ({
  type: GET_PAIR_SUCCESS,
  payload
});

/**
 * Gets quote
 */
export const GET_QUOTE = "[Quotes] Get Quote";
export const GET_QUOTE_FAIL = "[Quotes] Get Quote Fail";
export const GET_QUOTE_SUCCESS = "[Quotes] Get Quote Success";

interface GetQuote extends Action {
  readonly type: "[Quotes] Get Quote";
}

interface GetQuoteFail extends Action {
  readonly type: "[Quotes] Get Quote Fail";
  payload: any;
}

interface GetQuoteSuccess extends Action {
  readonly type: "[Quotes] Get Quote Success";
  payload: any;
}

export const GetQuote = (payload: any) => ({
  type: GET_QUOTE,
  payload
});

export const GetQuoteFail = (payload: any): GetQuoteFail => ({
  type: GET_QUOTE_FAIL,
  payload
});

export const GetQuoteSuccess = (payload: any): GetQuoteSuccess => ({
  type: GET_QUOTE_SUCCESS,
  payload
});

export type QuotesAction =
  | GetCodes
  | GetCodesFail
  | GetCodesSuccess
  | GetPair
  | GetPairFail
  | GetPairSuccess
  | GetQuote
  | GetQuoteFail
  | GetQuoteSuccess;
