import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

/**
 * Este modulo use el método forFeature() para definir cuales repositorios están
 * registrados en el alcance actual.
 * Con esto hecho podemos inyectar UsersRepository en UsersService usando @InjectRepository() 
 */

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
