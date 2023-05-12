const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [
        { name: "Tom", email: "tom@cartoon.com" },
        { name: "Jerry", email: "jerry@cartoon.com" },
      ],
    });
    console.log("Users loaded");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
