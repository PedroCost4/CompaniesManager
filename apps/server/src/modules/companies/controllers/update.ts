import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { updateCompany } from "../useCases/update";

export const updateCompanyProcedure = publicProcedure
  .input(
    z.object({
      id: z.string(),
      name: z.string().optional(),
      logo: z.string().optional(),
      businessType: z.string().optional(),
      active: z.boolean().optional(),
    })
  )
  .mutation(async (opts) => {
    const { input } = opts;
    const { id, ...data } = input;
    const company = await updateCompany(id, data);
    return company;
  });
