import Conexao from "../config/Conexao.js";

class DespesasModel {
    
    async findAll() {
        const conexao = new Conexao();
        const sql = "SELECT * FROM despesas";
        const data = await conexao.query(sql, {});
        return data;
    }

    async findOne(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM despesas WHERE id = "+id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data) {
        const con = new Conexao();
        const sql = "INSERT INTO despesas SET ";
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data, id) {
        const con = new Conexao();
        const sql = "UPDATE despesas SET ? WHERE id = ? ";
        const dados = [data, id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id) {
        const con = new Conexao();
        const sql = "DELETE FROM despesas WHERE id = " +id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }   

}

export default DespesasModel;