import { QueryResult } from "pg";
import { db } from "../database/database.js";
import { Receita, receitaResult } from "../protocols/receita.js";

async function insert(obj: Receita): Promise<QueryResult> {
  return await db.query(
    `
    INSERT INTO receitas (titulo, preparo, "tempoDePreparo") 
    VALUES ($1,$2,$3)
 `,
    [obj.titulo, obj.preparo, obj.tempoDePreparo]
  );
}

async function getReceitas(): Promise<QueryResult<receitaResult>> {
  return await db.query(`
    SELECT * FROM receitas;
    `);
}

async function deleteReceitas(id: number): Promise<QueryResult<any>> {
  return await db.query(
    `
        DELETE from receitas WHERE id = $1
    `,
    [id]
  );
}

async function updateReceitas(
  id: number,
  newPreparo: string
): Promise<QueryResult<any>> {
  return await db.query(
    `
        UPDATE receitas SET preparo = $1 WHERE id = $2
    `,
    [newPreparo, id]
  );
}

export default {
  insert,
  getReceitas,
  deleteReceitas,
  updateReceitas,
};
