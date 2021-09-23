import { Express } from "express";
import { QuotesController } from "./quotes";

const routes = (app: Express): void => {
  app.use("/", QuotesController);
};

export default routes;
