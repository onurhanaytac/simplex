import { combineEpics } from "redux-observable";

import * as quotesEpics from "./quotes.effects";

export default combineEpics(
  quotesEpics.getCodes$,
  quotesEpics.getPair$,
  quotesEpics.getQuote$
);
