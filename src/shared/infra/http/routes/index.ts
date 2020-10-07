import { Router } from 'express';
import employeeRouter from '@modules/employees/infra/http/routes/employee.routes';

const routes = Router();

routes.use('/employee', employeeRouter);


export default routes;
