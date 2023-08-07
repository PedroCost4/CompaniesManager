import prisma from "../../../db";

export const removeFromCompany = async (id: string) => {
    const office = prisma.office.update({
        where: {
          id,
        },
        data: {
            companyId: null,
        }
      });
    return office;
}