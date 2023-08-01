import express from "express";
import cors from "cors";
import * as trpcExpress from '@trpc/server/adapters/express'
import { createContext } from "../trpc";
import { appRouter } from "./trpc.routes";


const routes = (app: any) => {
  app
    .use(cors())
    .use(express.json())
    .use("/trpc", trpcExpress.createExpressMiddleware({ router: appRouter, createContext }))
};

export default routes;
