import { z } from "zod";
import { publicProcedure } from "../../../trpc";
import { getOffice } from "../useCases/get";

export const getOfficeProcedure = publicProcedure
  .input(
    z.string()
  )
  .query(async (opts) => {
    const { input } = opts;
    const office = await getOffice(input);
    return office;
  });
