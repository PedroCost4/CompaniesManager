
import { router } from "../../trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createCompanyProcedure } from "./controllers/create";
import { getCompanyProcedure } from "./controllers/get";
import { listCompanyProcedure } from "./controllers/list";
import { updateCompanyProcedure } from "./controllers/update";

export type CompanyRouterInputs = inferRouterInputs<typeof companyRouter>;
export type CompanyRouterOutputs = inferRouterOutputs<typeof companyRouter>;

export const companyRouter = router({
    createCompany: createCompanyProcedure,
    getCompany: getCompanyProcedure,
    listCompanies: listCompanyProcedure,
    updateCompany: updateCompanyProcedure,
});
