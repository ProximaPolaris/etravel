import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  name: string;

  @Column({ length: 50 })
  surname: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ name: 'country_id' })
  countryId: number;

  @Column({ length: 50 })
  city: string;

  @Column({ name: 'zip_code', length: 10 })
  zipCode: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ name: 'key_api', length: 100 })
  keyApi: string;

  @BeforeInsert()
  generateApiKey() {
    this.keyApi = uuidv4();
  }

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}
