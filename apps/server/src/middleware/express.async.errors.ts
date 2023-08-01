import { TRPCError } from "@trpc/server";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";

const asyncErrors = (app: any) => {
  app.use((error: TRPCError, request: Request, response: Response, next: NextFunction) => {
    response.status(Number(error.code)).json({
      status: "Error",
      message: error.message,
    });
  });
};

export default asyncErrors;
