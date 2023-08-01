import { Prisma } from "@prisma/client";
import prisma from "../../../db";

export const updateCompany = (id: string, data: Prisma.CompanyUpdateInput) => {
  const company = prisma.company.update({
    where: {
      id,
    },
    data,
  });
  return company;
};
