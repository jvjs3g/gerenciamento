import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Position from '@modules/positions/infra/typeorm/entities/Position';

@Entity('employee')
class Employee {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name:string;

  @Column() 
  lastName:string;

  @Column()
  email:string;

  @Column()
  position:string;

  @ManyToOne(() => Position)
  @JoinColumn({ name: 'position '})
  cargo: Position;

  @Column()
  dateofbirth:Date;

  @Column('decimal')
  salary:number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Employee;