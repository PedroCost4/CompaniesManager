import prisma from "../../../db";

export const deleteOffice = async (id: string) => {
  const office = prisma.office.delete({
    where: {
      id,
    },
  });
  return office;
};
