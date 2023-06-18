import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lodgings')
export class Lodging {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'travel_id' })
  travelId: number;

  @Column({ length: 100 })
  address: string;

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
