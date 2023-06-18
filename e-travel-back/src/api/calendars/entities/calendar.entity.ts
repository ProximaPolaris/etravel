import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendars')
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'travel_id' })
  travelId: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ name: 'activity_id' })
  activityId: number;

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
