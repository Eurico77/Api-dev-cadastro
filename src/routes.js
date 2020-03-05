import { Router } from 'express';

import SessionControler from './controllers/SessionController';
import HouseController from './controllers/HouseController';


const routes = new Router();

routes.post('/sessions',SessionControler.store);

routes.post('/houses',HouseController.store);   
   

export default routes;