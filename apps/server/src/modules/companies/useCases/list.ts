import prisma from "../../../db";

export const listCompanies = async () => {
  const companies = await prisma.company.findMany();
  return companies;
};
