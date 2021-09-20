import { createSelector } from "reselect";
import { quotesReducer } from "../reducers";

export const getQuotesState = createSelector(
  quotesReducer.getQuotesState,
  (state: quotesReducer.QuotesState) => state
);

/**
 * codes selectors
 */
export const getCodes = createSelector(getQuotesState, quotesReducer.getCodes);

export const getCodesLoading = createSelector(
  getQuotesState,
  quotesReducer.getCodesLoading
);

export const getCodesLoaded = createSelector(
  getQuotesState,
  quotesReducer.getCodesLoaded
);

/**
 * pair selectors
 */
export const getPair = createSelector(getQuotesState, quotesReducer.getPair);

export const getPairLoading = createSelector(
  getQuotesState,
  quotesReducer.getPairLoading
);

export const getPairLoaded = createSelector(
  getQuotesState,
  quotesReducer.getPairLoaded
);

/**
 * pair selectors
 */
export const getQuote = createSelector(getQuotesState, quotesReducer.getQuote);

export const getQuoteLoading = createSelector(
  getQuotesState,
  quotesReducer.getQuoteLoading
);

export const getQuoteLoaded = createSelector(
  getQuotesState,
  quotesReducer.getQuoteLoaded
);
