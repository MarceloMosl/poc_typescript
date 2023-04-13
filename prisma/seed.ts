import prisma from "../src/database/database.js";

async function main() {
  await prisma.receitas.createMany({
    data: [
      {
        titulo: "picanha",
        preparo: "joga no forno",
        tempoDePreparo: "2",
      },
      {
        titulo: "picanha",
        preparo: "joga no forno",
        tempoDePreparo: "2",
      },
      {
        titulo: "picanha",
        preparo: "joga no forno",
        tempoDePreparo: "2",
      },
    ],
  });
}

main()
  .then(() => console.log("created"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
