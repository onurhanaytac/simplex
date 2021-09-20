import { AppState } from ".";
import { ResponseState } from "../../types";
import * as quotesActions from "../actions/quotes.actions";
import _ from "lodash";

export interface QuotesState {
  codes: ResponseState;
  pair: ResponseState;
  quote: ResponseState;
}

export const initialState: QuotesState = {
  codes: {
    response: null,
    loading: false,
    loaded: false
  },
  pair: {
    response: [],
    loading: false,
    loaded: false
  },
  quote: {
    response: [],
    loading: false,
    loaded: false
  }
};

export function reducer(
  state = initialState,
  action: quotesActions.QuotesAction
): QuotesState {
  switch (action.type) {
    case quotesActions.GET_CODES: {
      return {
        ...state,
        codes: {
          ...state.codes,
          loading: true,
          loaded: false
        }
      };
    }
    case quotesActions.GET_CODES_SUCCESS: {
      return {
        ...state,
        codes: {
          response: _.flattenDeep(action.payload).filter(
            (item) =>
              item === "USD" ||
              item === "EUR" ||
              item === "GBP" ||
              item === "ILS"
          ),
          loading: false,
          loaded: true
        }
      };
    }
    case quotesActions.GET_CODES_FAIL: {
      return {
        ...state,
        codes: {
          ...state.codes,
          loading: false,
          loaded: false
        }
      };
    }
    case quotesActions.GET_PAIR: {
      return {
        ...state,
        pair: {
          ...state.pair,
          loading: true,
          loaded: false
        }
      };
    }
    case quotesActions.GET_PAIR_SUCCESS: {
      return {
        ...state,
        pair: {
          response: action.payload,
          loading: false,
          loaded: true
        }
      };
    }
    case quotesActions.GET_PAIR_FAIL: {
      return {
        ...state,
        pair: {
          ...state.pair,
          loading: false,
          loaded: false
        }
      };
    }
    case quotesActions.GET_QUOTE: {
      return {
        ...state,
        quote: {
          ...state.quote,
          loading: true,
          loaded: false
        }
      };
    }
    case quotesActions.GET_QUOTE_SUCCESS: {
      return {
        ...state,
        quote: {
          response: {
            ...action.payload,
            quoteAmount: action.payload.quoteAmount / 100
          },
          loading: false,
          loaded: true
        }
      };
    }
    case quotesActions.GET_QUOTE_FAIL: {
      return {
        ...state,
        quote: {
          ...state.quote,
          loading: false,
          loaded: false
        }
      };
    }
    default: {
      return state;
    }
  }
}

export const getQuotesState = (state: AppState): QuotesState => state.quotes;

export const getCodes = (state: QuotesState): string[] => state.codes.response;
export const getCodesLoading = (state: QuotesState): boolean =>
  state.codes.loading;
export const getCodesLoaded = (state: QuotesState): boolean =>
  state.codes.loaded;

export const getPair = (state: QuotesState): any => state.pair.response;
export const getPairLoading = (state: QuotesState): boolean =>
  state.pair.loading;
export const getPairLoaded = (state: QuotesState): boolean => state.pair.loaded;

export const getQuote = (state: QuotesState): any => state.quote.response;
export const getQuoteLoading = (state: QuotesState): boolean =>
  state.quote.loading;
export const getQuoteLoaded = (state: QuotesState): boolean =>
  state.quote.loaded;
