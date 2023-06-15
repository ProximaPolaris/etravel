import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 2 })
  code: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'full_name', type: 'varchar', length: 255 })
  fullName: string;

  @Column({ type: 'char', length: 3 })
  iso3: string;

  @Column({ name: 'numeric_code', type: 'char', length: 3 })
  numericCode: string;

  @Column({ name: 'continent_code', type: 'char', length: 2 })
  continentCode: string;
}
