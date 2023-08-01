import { Prisma } from "@prisma/client";
import prisma from "../../../db";

export const updateOffice = (id: string, data: Prisma.OfficeUpdateInput) => {
  const office = prisma.office.update({
    where: {
      id,
    },
    data,
  });
  return office;
};
