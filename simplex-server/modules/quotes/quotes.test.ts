/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { QuotesDAL, QuotesService } from ".";

jest.mock("axios");

const quotesService = new QuotesService(new QuotesDAL());
const mockPairSuccess = {
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
const mockPairError = {
  status: 404,
  statusText: "Not Found"
};
const mockPairBroken = {
  result: "success",
  documentation: "https://www.exchangerate-api.com/docs",
  terms_of_use: "https://www.exchangerate-api.com/terms",
  time_last_update_unix: 1632268802,
  time_last_update_utc: "Wed, 22 Sep 2021 00:00:02 +0000",
  time_next_update_unix: 1632355202,
  time_next_update_utc: "Thu, 23 Sep 2021 00:00:02 +0000",
  base_code: "EUR",
  target_code: "USD",
  conversion_rate: -100
};

test("should calculate the correct quote amount", async () => {
  (axios.get as any).mockResolvedValue(
    Promise.resolve({ data: mockPairSuccess })
  );

  const result = await quotesService.getQuote({
    baseAmount: 100,
    baseCurrency: "EUR",
    quoteCurrency: "USD"
  });

  expect(result.data.result).toBe("success");
  expect(result.data.exchangeRate).toBe(1.176);
  expect(result.data.quoteAmount).toBe(118);
  expect(result.data.quoteAmount).toBe(
    Math.round(mockPairSuccess.conversion_result)
  );
});

test("exchange api not found should be handled", async () => {
  (axios.get as any).mockResolvedValue(
    Promise.reject({ response: mockPairError })
  );

  const result = await quotesService.getQuote({
    baseAmount: 100,
    baseCurrency: "EUR",
    quoteCurrency: "TRY"
  });

  expect(result?.error?.status).toBe(404);
  expect(result?.error?.statusText).toBe("Not Found");
});

test("calculating result with invalid conversion rates", async () => {
  (axios.get as any).mockResolvedValue(
    Promise.resolve({ data: mockPairBroken })
  );

  const result = await quotesService.getQuote({
    baseAmount: -0,
    baseCurrency: "EUR",
    quoteCurrency: "TRY"
  });

  expect(result.data.exchangeRate).toBe(-100);
  expect(result.data.quoteAmount).toBe(0);
});
