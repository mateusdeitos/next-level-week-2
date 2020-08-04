import express from 'express';
import classesRouter from './classes.routes';

const routes = express.Router();

routes.use('/classes', classesRouter);

export default routes;
