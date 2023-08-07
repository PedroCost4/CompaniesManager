import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { getCompany } from "../useCases/get";

export const getCompanyProcedure = publicProcedure
  .input(
    z.string()
  )
  .query(async (opts) => {
    const { input } = opts;
    const company = await getCompany(input);
    return company;
  });
