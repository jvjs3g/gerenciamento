import { Router} from 'express';

import EmployeeController from '../controllers/EmployeeController';

const employeeRouter = Router();


const employeeController = new EmployeeController();

employeeRouter.post('/', employeeController.create);


export default employeeRouter;


// apartir do momento que tenho regra de negocio na rota preciso criar um service
