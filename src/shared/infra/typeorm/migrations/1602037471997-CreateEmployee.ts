import { MigrationInterface, QueryRunner, Table} from "typeorm";

export default  class CreateEmployee1602037471997 implements MigrationInterface {

 public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
        new Table({
          name:'employee',
          columns:[
            {
              name: 'id',
              type: 'uuid',
              isPrimary:true,
              generationStrategy:'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name:'name',
              type: 'varchar'
            },
            {
              name:'lastName',
              type: 'varchar'
            },
            {
              name:'email',
              type:'varchar',
              isUnique:true,
            },
            {
              name:'position',
              type:'varchar',
            },
            {
              name:'dateofbirth',
              type:'date',
            },
            { 
              name:'salary',
              type: 'decimal',
              precision: 10,
              scale: 2,
            },
            {
              name:'created_at',
              type:'timestamp',
              default:'now()'
            },
            {
              name:'updated_at',
              type:'timestamp',
              default:'now()'
            },
          ],
        }),
      );
    }
  
 public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employee');

    }

}
