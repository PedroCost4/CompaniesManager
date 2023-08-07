import prisma from "../../../db";

export const getOffice = async (id: string) => {
  const company = await prisma.office.findUnique({
    where: {
      id,
    }
  });
  return company;
};
