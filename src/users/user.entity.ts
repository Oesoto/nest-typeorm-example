import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * TypeORM soporta el patron repository. Cada entidad tiene su propio repositorio.
 * Estos repositorios pueden ser obtenidos de la conexión a base de datos.
 * Una entidad es una clase que se mapea a un tabla de base de datos.
 */

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
