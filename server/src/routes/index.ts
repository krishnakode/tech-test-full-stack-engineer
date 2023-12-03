import * as express from 'express';
import { leadRoute } from './leadRoutes';

export const routes = express.Router();

export default routes.use(leadRoute);