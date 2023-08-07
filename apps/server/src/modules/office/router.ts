
import { router } from "../../trpc";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createOfficeProcedure } from "./controllers/create";
import { updateOfficeProcedure } from "./controllers/update";
import { deleteOfficeProcedure } from "./controllers/delete";
import { removeOfficeProcedure } from "./controllers/removeFromCompany";
import { getOfficeProcedure } from "./controllers/get";

export type OfficeRouterInputs = inferRouterInputs<typeof officeRouter>;
export type OfficeRouterOutputs = inferRouterOutputs<typeof officeRouter>;

export const officeRouter = router({
    createOffice: createOfficeProcedure,
    updateOffice: updateOfficeProcedure,
    deleteOffice: deleteOfficeProcedure,
    removeOfficeFromCompany: removeOfficeProcedure,
    getOffice: getOfficeProcedure,
});
