import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { createCompany } from "../useCases/create";

export const createCompanyProcedure = publicProcedure
  .input(
    z.object({
      name: z.string(),
      logo: z.string(),
      businessType: z.string(),
      active: z.boolean(),
    })
  )
  .mutation(async (opts) => {
    const { input } = opts;
    const company = await createCompany(input);
    return company;
  });
