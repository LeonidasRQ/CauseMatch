import { Router } from "express";
import volunteerRouter from "./volunteer.router.js";

export function apiRouter(app) {
  const router = Router();

  app.use("/api/v1", router);

  router.use("/volunteers", volunteerRouter);
}
