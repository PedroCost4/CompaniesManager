import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { removeFromCompany } from "../useCases/removeFromCompany";

export const removeOfficeProcedure = publicProcedure
.input(
    z.object({
        id: z.string(),
    })
).mutation(async (opts) => {
    const { input } = opts;
    const office = await removeFromCompany(input.id);
    return office;
})