
import { router } from "../../trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createOfficeProcedure } from "./controllers/create";

export type OfficeRouterInputs = inferRouterInputs<typeof officeRouter>;
export type OfficeRouterOutputs = inferRouterOutputs<typeof officeRouter>;

export const officeRouter = router({
    createOffice: createOfficeProcedure,
});
