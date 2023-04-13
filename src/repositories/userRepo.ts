import { QueryResult } from "pg";
import prisma from "../database/database.js";
import { Receita, receitaResult } from "../protocols/receita.js";

async function insert(obj: Receita) {
  return prisma.receitas.create({
    data: obj,
  });
}

async function getReceitas() {
  return prisma.receitas.findMany();
}

async function deleteReceitas(id: number) {
  return [];
}

async function updateReceitas(id: number, newPreparo: string) {
  return prisma.receitas.update({
    where: { id },
    data: { tempoDePreparo: newPreparo },
  });
}

export default {
  insert,
  getReceitas,
  deleteReceitas,
  updateReceitas,
};
