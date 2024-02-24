import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const courseOne = await prisma.course.create({
    data: {
      name: "Web development",
      description: "Course of web development",
    },
  });

  const classACouseOne = await prisma.class.create({
    data: {
      name: "Class A",
      courseId: courseOne.id,
    },
  });

  const classBCouseOne = await prisma.class.create({
    data: {
      name: "Class B",
      courseId: courseOne.id,
    },
  });

  const courseTwo = await prisma.course.create({
    data: {
      name: "Mobile development",
      description: "Course of mobile development",
    },
  });

  const classACouseTwo = await prisma.class.create({
    data: {
      name: "Class A",
      courseId: courseTwo.id,
    },
  });

  const classBCouseTwo = await prisma.class.create({
    data: {
      name: "Class B",
      courseId: courseTwo.id,
    },
  });

  return {
    courseOne,
    courseTwo,
    classACouseOne,
    classACouseTwo,
    classBCouseOne,
    classBCouseTwo,
  };
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
