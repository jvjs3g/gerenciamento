import Employee from '@modules/employees/infra/typeorm/entities/Employee';
import IcreateEmployeeDTO from '@modules/employees/dtos/ICreateEmployee';

export default interface IEmployeeRepository {
  create(data:IcreateEmployeeDTO ):Promise<Employee>;
  findByEmail(email:string):Promise<Employee | undefined>;
}