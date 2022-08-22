import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: true,
    default: '',
  })
  description: string;

  @Column({
    nullable: true,
    type: 'uuid',
  })
  epic: string;

  @Column({
    nullable: true,
    type: 'date',
    name: 'due_date',
  })
  dueDate: Date;
}
