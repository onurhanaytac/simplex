import * as quotesReducer from "./quotes.reducer";

export { quotesReducer };

export interface AppState {
  quotes: quotesReducer.QuotesState;
}

export default {
  quotes: quotesReducer.reducer,
};
