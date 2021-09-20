import axios from "axios";

import { Response, PairPayload } from "./quotes.type";
import config from "../../config";

export default class QuotesDAL {
  async getCodes(): Promise<Response> {
    return await axios
      .get(`${config.url}/codes`)
      .then(
        (res): Response => ({
          data: res.data
        })
      )
      .catch((error): Response => ({ error }));
  }

  async getPair(payload: PairPayload): Promise<Response> {
    return await axios
      .get(
        `${config.url}/pair/${payload.baseCurrency}/${payload.quoteCurrency}/${payload.baseAmount}`
      )
      .then((res): Response => {
        return {
          data: res.data
        };
      })
      .catch((error): Response => ({ error }));
  }

  async getQuote(payload: PairPayload): Promise<Response> {
    return await axios
      .get(
        `${config.url}/pair/${payload.baseCurrency}/${payload.quoteCurrency}`
      )
      .then((res): Response => {
        return {
          data: res.data
        };
      })
      .catch((error): Response => ({ error }));
  }
}
