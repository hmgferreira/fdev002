import express from 'express'
import UsuariosRoutes from './routes/UsuariosRoutes.js';

const app = express();
app.use(express.json());

// localhost:8000
app.get('/', function(request, response) {
    return response.send("Servidor executando 111111 22222");
});

app.use(UsuariosRoutes);

app.listen(8000, () => {
    console.log("Servidor executando");
})