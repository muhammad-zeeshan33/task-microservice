import { DataSourceOptions } from 'typeorm';

const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'task_user',
  password: '123',
  database: 'task_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default ormConfig;
