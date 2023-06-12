import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const product = await prisma.product.create({
    data: {
      title: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
      price: 125.00,
      discount: .5,
      inventory: 999
    }
  })
  const image = await prisma.image.create({
    data: {
      url: 'image-product-1.jpg',
      thumb: 'image-product-1-thumbnail.jpg',
      alt: 'product image',
    }
  })
  await prisma.productImages.create({
    data: {
      productId: product.id,
      imageId: image.id
    }
  })
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
