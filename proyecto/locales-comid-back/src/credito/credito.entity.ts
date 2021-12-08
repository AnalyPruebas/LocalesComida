import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HistorialCreditoEntity } from '../historial-credito/historial-credito.entity';

@Entity('credito')
export class CreditoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'monto_inicial',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  montoInicial: number;

  @Column({
    name: 'monto_actual',
    type: 'decimal',
    scale: 4,
    precision: 10,
  })
  montoActual: number;

  @OneToMany(
    type => HistorialCreditoEntity,
    historialCredito => historialCredito.credito,
  )
  historialesCredito: HistorialCreditoEntity[];
}
