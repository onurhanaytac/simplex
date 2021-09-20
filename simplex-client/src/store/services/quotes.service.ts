import axios from "axios";

class QuotesService {
  constructor() {}

  async getCodes() {
    return axios
      .get(`http://localhost:3000/quotes/codes`)
      .then((res) => res?.data?.supported_codes)
      .catch((error) => error);
  }

  async getPair({ payload }: any) {
    return axios
      .get(`http://localhost:3000/quotes/pair`, { params: payload })
      .then((res) => res.data)
      .catch((error) => error);
  }

  async getQuote({ payload }: any) {
    return axios
      .get(`http://localhost:3000/quote`, { params: payload })
      .then((res) => res.data)
      .catch((error) => error);
  }
}

export default new QuotesService();
