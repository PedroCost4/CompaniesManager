import { publicProcedure } from "../../../trpc";
import { listCompanies } from "../useCases/list";

export const listCompanyProcedure = publicProcedure.query(async (opts) => {
  const companies = await listCompanies();
  return companies;
});
