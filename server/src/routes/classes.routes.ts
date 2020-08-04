/* eslint-disable camelcase */
import express, { request } from 'express';
import ClassesController from '../controllers/classesController';

const classesRouter = express.Router();
const classesController = new ClassesController();

classesRouter.get('/', classesController.index);

classesRouter.post('/', classesController.create);

export default classesRouter;
