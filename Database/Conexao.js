import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.conexao && global.conexao.state !== "disconnected") {
    return global.conexao;
  }

  const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin1234",
    database: "aplication-cloud",
    port: 3306,
  });

  global.conexao = conn;
  return conn;
}
