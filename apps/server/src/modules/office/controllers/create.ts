import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { createOffice } from "../useCases/create";

export const createOfficeProcedure = publicProcedure
  .input(
    z.object({
      name: z.string(),
      companyId: z.string(),
    })
  )
  .mutation(async (opts) => {
    const { input } = opts;
    const office = await createOffice(input);
    return office;
  });
