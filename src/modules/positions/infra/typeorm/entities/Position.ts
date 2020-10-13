import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('position')
class Position {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name:string;

  @Column() 
  description:string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Position;