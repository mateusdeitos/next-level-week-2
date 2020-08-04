import express from 'express';
import classesRouter from './classes.routes';
import connectionsRouter from './connections.routes';

const routes = express.Router();

routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);

export default routes;
