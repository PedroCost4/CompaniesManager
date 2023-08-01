import prisma from "../../../db";
import { Prisma } from "@prisma/client";

export const createOffice = async ({ name, companyId }: Prisma.OfficeUncheckedCreateInput) => {
  const office = prisma.office.create({
    data: {
      name,
      companyId,
    },
  });
  return office;
};
