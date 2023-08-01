import prisma from "../../../db";
import { Prisma } from "@prisma/client";

export const createCompany = async ({
  name,
  logo,
  businessType,
  active,
  offices,
}: Prisma.CompanyUncheckedCreateInput) => {
  const company = prisma.company.create({
    data: {
      name,
      logo,
      businessType,
      active,
      offices,
    },
  });
  return company;
};

export default createCompany;
