/* eslint-disable camelcase */
import express, { request } from 'express';
import ConnectionController from '../controllers/ConnectionsController';

const connectionsRouter = express.Router();
const connectionController = new ConnectionController();

connectionsRouter.get('/', connectionController.index);

connectionsRouter.post('/', connectionController.create);

export default connectionsRouter;
