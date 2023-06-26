import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('continents')
export class Continent {
  @PrimaryColumn({ length: 2 })
  code: string;

  @Column({ length: 255 })
  name: string;
}
