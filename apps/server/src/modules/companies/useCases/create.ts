import prisma from "../../../db";
import { Prisma } from "@prisma/client";

export const verifyBusinessType = (businessType: string) => {
  const businessTypes = ["accounting","law"];
  if (!businessTypes.includes(businessType.toLowerCase())) { 
    throw new Error("Invalid business type");
  }
}

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
