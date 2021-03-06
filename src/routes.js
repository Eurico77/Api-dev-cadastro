import { Router } from 'express';
import multer from 'multer';
import  uploadConfig from './config/upload';

import SessionControler from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashBoardController from './controllers/DashBoardController';



const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionControler.store);

routes.post('/houses', upload.single('thumbnail') ,HouseController.store);   
routes.get('/houses', HouseController.index ); 
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashBoardController.show);

   

export default routes;