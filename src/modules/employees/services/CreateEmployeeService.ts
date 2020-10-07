import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppErro';
import Employee from '@modules/employees/infra/typeorm/entities/Employee';
import IEmployeeRepository from '@modules/employees/repositories/IEmployeeRepository';


interface IRequest{
  name:string;
  lastName: string;
  email:string;
  position:string;
  dateofbirth:Date;
  salary:number;
}

@injectable()
class CreateEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ){}

  public async execute({name, lastName, email,  position, dateofbirth, salary }: IRequest):Promise<Employee>{
    
    const checkEmployeeExists = await this.employeeRepository.findByEmail(email);

    if(checkEmployeeExists){
      throw new AppError('Email address already used');
    }

    const employee = await this.employeeRepository.create({
      name,
      lastName,
      email, 
      position,
      dateofbirth,
      salary
    });

    return employee;
  }
}

export default  CreateEmployeeService;