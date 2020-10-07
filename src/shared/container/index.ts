import { container } from 'tsyringe';

import IEmployeeRepository from '@modules/employees/repositories/IEmployeeRepository';
import EmployeeRepository from '@modules/employees/infra/typeorm/repositories/EmployeeRepository';

container.registerSingleton<IEmployeeRepository>('EmployeeRepository',EmployeeRepository);