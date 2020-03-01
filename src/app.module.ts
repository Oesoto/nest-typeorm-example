import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'users',
      entities: [User],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    // TypeOrmModule.forRoot({
    //   ...Postgres options,
    //   name: 'userConnection',
    //   host: 'localhost',
    //   entities: [User],
    // }),
  ],
})
export class AppModule {}
