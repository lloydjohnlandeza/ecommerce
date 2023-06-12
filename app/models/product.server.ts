import { Product } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Product, Image, ProductImages } from "@prisma/client";


export async function getProductById(id: Product["id"]) {
  return prisma.product.findUnique({ where: { id }, include: { productImages: { include: { Image: true }} }})
}