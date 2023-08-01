import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { updateOffice } from "../useCases/update";

export const updateOfficeProcedure = publicProcedure
  .input(
    z.object({
      id: z.string(),
      name: z.string().optional(),
    })
  )
  .mutation(async (opts) => {
    const { input } = opts;
    const { id, ...data } = input;
    const company = await updateOffice(id, data);
    return company;
  });
