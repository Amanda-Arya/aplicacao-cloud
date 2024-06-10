import { Router } from "express";
import AlunoCTRL from "../Controller/AlunoCtrl.js";

const rotaAluno = new Router();
const alunoCtrl = new AlunoCTRL();

rotaAluno
  .post("/", alunoCtrl.gravar)
  .put("/", alunoCtrl.atualizar)
  .delete("/:codigo", alunoCtrl.excluir)
  .get("/", alunoCtrl.consultar)

export default rotaAluno;