import Conexao from '../config/Conexao.js';

class UsuariosModel {

    async findAll() {
        const con = new Conexao();
        const sql = "SELECT * FROM usuarios";
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async findOne(id) {
        const con = new Conexao();
        const sql = "SELECT * FROM usuarios WHERE id = "+id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async create(data) {
        const con = new Conexao();
        const sql = "INSERT INTO usuarios SET ";
        const dados = data;
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async update(data, id) {
        const con = new Conexao();
        const sql = "UPDATE usuarios SET ? WHERE id = ? ";
        const dados = [data, id];
        const resultados = await con.query(sql, dados);
        return resultados;
    }

    async delete(id) {
        const con = new Conexao();
        const sql = "DELETE FROM usuarios WHERE id = " +id;
        const dados = {};
        const resultados = await con.query(sql, dados);
        return resultados;
    }
}

export default UsuariosModel;