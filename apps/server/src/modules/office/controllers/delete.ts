import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { deleteOffice } from "../useCases/delete";

export const deleteOfficeProcedure = publicProcedure
.input(
    z.object({
        id: z.string(),
    })
).mutation(async (opts) => {
    const { input } = opts;
    const office = await deleteOffice(input.id);
    return office;
})