/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { QuotesService } from ".";

jest.mock("axios");

const quotesService = new QuotesService();
const mockPair = {
  result: "success",
  documentation: "https://www.exchangerate-api.com/docs",
  terms_of_use: "https://www.exchangerate-api.com/terms",
  time_last_update_unix: 1632268802,
  time_last_update_utc: "Wed, 22 Sep 2021 00:00:02 +0000",
  time_next_update_unix: 1632355202,
  time_next_update_utc: "Thu, 23 Sep 2021 00:00:02 +0000",
  base_code: "EUR",
  target_code: "USD",
  conversion_rate: 1.1756,
  conversion_result: 117.56
};

test("should calculate the correct quote amount", async () => {
  (axios.get as any).mockResolvedValue(Promise.resolve({ data: mockPair }));

  const result = await quotesService.getQuote({
    baseAmount: 100,
    baseCurrency: "EUR",
    quoteCurrency: "USD"
  });

  expect(result.data.result).toBe("success");
  expect(result.data.exchangeRate).toBe(1.176);
  expect(result.data.quoteAmount).toBe(118);
  expect(result.data.quoteAmount).toBe(Math.round(mockPair.conversion_result));
});
