import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // Create categories
  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      description: "Electronic products and gadgets",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      description: "Apparel and clothing items",
    },
  });

  const books = await prisma.category.create({
    data: {
      name: "Books",
      description: "Educational and entertainment books",
    },
  });

  // Create sample products
  await prisma.product.create({
    data: {
      name: "Laptop",
      description: "High-performance laptop",
      price: 999.99,
      quantity: 10,
      categoryId: electronics.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "T-Shirt",
      description: "Cotton T-shirt",
      price: 19.99,
      quantity: 50,
      categoryId: clothing.id,
    },
  });

  await prisma.product.create({
    data: {
      name: "JavaScript Guide",
      description: "Learn JavaScript programming",
      price: 29.99,
      quantity: 30,
      categoryId: books.id,
    },
  });

  console.log("✅ Seed data created successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
