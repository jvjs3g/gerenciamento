import { getRepository, Repository, Raw  } from 'typeorm';

import IEmployeeRepository from '@modules/employees/repositories/IEmployeeRepository';

import Employee from '../entities/Employee';

import IcreateEmployee from '@modules/employees/dtos/ICreateEmployee';

class EmployeeRepository implements IEmployeeRepository {
  private ormRepository: Repository<Employee>;

  constructor(){
    this.ormRepository = getRepository(Employee);
  }

  public async create({ name, lastName, email, position, dateofbirth, salary  }: IcreateEmployee):Promise<Employee>{

    const employee =  this.ormRepository.create({
      name,
      lastName,
      email,
      position,
      dateofbirth,
      salary
    }); 

    await this.ormRepository.save(employee);

    return employee;
  }

  public async findByEmail(email:string):Promise<Employee | undefined>{
    const employee = await this.ormRepository.findOne({
      where:{
        email,
      }
    });

    return employee;
  }
}

export default EmployeeRepository;