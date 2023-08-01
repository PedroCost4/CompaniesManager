import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { getCompany } from "../useCases/get";

export const getCompanyProcedure = publicProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async (opts) => {
    const { input } = opts;
    const company = await getCompany(input.id);
    return company;
  });
