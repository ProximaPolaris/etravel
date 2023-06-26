import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_activities')
export class TypeActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  label: string;

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
