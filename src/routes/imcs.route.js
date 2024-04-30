import { Router } from 'express';
import { ImcsController } from '../controller/imcs.controller.js';

export const imcsRouter = Router();
const imcsController = new ImcsController();

imcsRouter.get('/', imcsController.getAllImcs);
imcsRouter.post('/', imcsController.addImcs);
imcsRouter.patch('/:id', imcsController.updateImc);
imcsRouter.delete('/:id', imcsController.deleteImcs);