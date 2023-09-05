import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  songName: string;

  @Column()
  band: string;

  @Column()
  year: string;
}