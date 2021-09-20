import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import * as fromActions from "../actions";
import { quotesService } from "../services";
import * as quotesAction from "../actions/quotes.actions";

export const getCodes$ = (action$: any, state$: any) =>
  action$.pipe(
    ofType(quotesAction.GET_CODES),
    switchMap((action) =>
      from(quotesService.getCodes()).pipe(
        map((response) => fromActions.GetCodesSuccess(response)),
        catchError((error) => of(fromActions.GetCodesFail(error)))
      )
    )
  );

export const getPair$ = (action$: any, state$: any) =>
  action$.pipe(
    ofType(quotesAction.GET_PAIR),
    switchMap((action) =>
      from(quotesService.getPair(action)).pipe(
        map((response) => fromActions.GetPairSuccess(response)),
        catchError((error) => of(fromActions.GetPairFail(error)))
      )
    )
  );

export const getQuote$ = (action$: any, state$: any) =>
  action$.pipe(
    ofType(quotesAction.GET_QUOTE),
    switchMap((action: any) => {
      action.payload = {
        ...action.payload,
        baseAmount: Math.round(action?.payload?.baseAmount * 100)
      };
      return from(quotesService.getQuote(action)).pipe(
        map((response) => fromActions.GetQuoteSuccess(response)),
        catchError((error) => of(fromActions.GetQuoteFail(error)))
      );
    })
  );
