import prisma from "../../../db";

export const getCompany = async (id: string) => {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
    include : {
      offices: true,
    }
  });
  return company;
};
