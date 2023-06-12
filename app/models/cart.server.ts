import type { User, Cart, Product } from "@prisma/client";
import { json } from "@remix-run/node";
import { prisma } from "~/db.server";

export async function getUserCart(id: User["id"]) {
  return prisma.cart.findFirst({
    where: {
      userId: "clism6qg10000rgqwy13g9uxm",
    },
    include: {
      productCart: {
        include: {
          product: {
            include: {
              productImages: true,
            },
          },
        },
      },
    },
  });
}

export async function addToCart(userId: User["id"], products: [Product["id"]]) {
  const cart = await prisma.cart.upsert({
    where: { userId: userId },
    update: { userId: userId },
    create: { userId: userId },
  });
  await prisma.productCart.create({
    data: {
      productId: 1,
      cartId: cart.id,
    },
  });
}
