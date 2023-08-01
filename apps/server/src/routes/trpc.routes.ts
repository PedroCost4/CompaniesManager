import { router } from "../trpc";
import { companyRouter, CompanyRouterInputs, CompanyRouterOutputs } from "../modules/companies/router";
import { officeRouter, OfficeRouterInputs, OfficeRouterOutputs } from "../modules/office/router";

export const appRouter = router({
    companies: companyRouter,
    offices: officeRouter
})

export type AppRouter = typeof appRouter;
export { CompanyRouterInputs, CompanyRouterOutputs, OfficeRouterInputs, OfficeRouterOutputs }