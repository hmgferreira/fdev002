import express from 'express'
import DespesasController from '../controllers/DespesasController.js';

const DespesasRoutes = express.Router();

const despesasController = new DespesasController();
DespesasRoutes.get('/usuarios', despesasController.findAll);
DespesasRoutes.get('/usuarios/:id', despesasController.findOne);
DespesasRoutes.post('/usuarios', despesasController.create);
DespesasRoutes.put('/usuarios/:id', despesasController.update);
DespesasRoutes.delete('/usuarios/:id', despesasController.delete);

export default DespesasRoutes;