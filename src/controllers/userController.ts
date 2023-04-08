import { Request, Response } from "express";
import { Receita, updateReceitaType } from "../protocols/receita";
import userRepo from "../repositories/userRepo.js";
import { receiptSchema } from "../schemas/receiptSchema.js";

export async function getReceitas(req: Request, res: Response) {
  const promise = await userRepo.getReceitas();

  return res.send(promise.rows);
}

export async function insertReceita(req: Request, res: Response) {
  const receipt = req.body as Receita;

  const { error } = receiptSchema.validate(receipt);
  if (error)
    return res.status(400).send({
      message: error.message,
    });

  await userRepo.insert(receipt);

  return res.status(201).send("RECEITA INSERIDA COM SUCESSO MY FRIEND");
}

export async function deleteReceitas(req: Request, res: Response) {
  const { id } = req.params;
  console.log(id);

  await userRepo.deleteReceitas(Number(id));

  return res.sendStatus(200);
}

export async function updateReceitas(req: Request, res: Response) {
  const { id } = req.params;

  const { preparo: newPreparo } = req.body as updateReceitaType;

  if (!newPreparo) return res.sendStatus(400);

  await userRepo.updateReceitas(Number(id), newPreparo);

  return res.sendStatus(200);
}
