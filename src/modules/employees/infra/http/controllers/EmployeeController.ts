import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateEmployeeeService from '@modules/employees/services/CreateEmployeeService';

export default class EmployeeController {
  public async create(request:Request, response:Response): Promise<Response>{
    const createEmployee = container.resolve(CreateEmployeeeService);

    const {name, lastName, email, position, dateofbirth , salary } = request.body;

    const employee = await createEmployee.execute({
      name,
      lastName,
      email,
      position,
      dateofbirth,
      salary
    });

    return response.json(employee);
  }
}