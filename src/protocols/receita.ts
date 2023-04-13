export type Receita = Omit<receitaResult, "id">;

export type receitaResult = {
  id: number;
  titulo: string;
  preparo: string;
  tempoDePreparo: string;
};

export type updateReceitaType = {
  preparo: string;
};
