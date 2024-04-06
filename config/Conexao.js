import mysql from 'mysql'
import { makeDb } from 'mysql-async-simple';
class Conexao {
    constructor() {
        this.connection = mysql.createConnection({
            host     : '107.161.183.117',
            user     : 'opencomtecnologi_bd',
            password : 'bc86KxHD4XnO',
            database : 'opencomtecnologi_bd'
        });
        this.db = makeDb();
    }

    async query (sql, dados) {

        await this.db.connect(this.connection);
        try {
            const data = await this.db.query(this.connection, sql, dados);
            return data;
            
        } catch(e) {
            throw e;
        } finally {
            await this.db.close(this.connection);
        }      
    }
}

export default Conexao;