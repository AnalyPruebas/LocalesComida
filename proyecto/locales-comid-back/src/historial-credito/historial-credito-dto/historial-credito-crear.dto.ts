import { IsNumberString, IsNotEmpty, IsBooleanString } from 'class-validator';

export class HistorialCreditoCrearDto {
  @IsNumberString()
  @IsNotEmpty()
  monto: number;

  @IsBooleanString()
  @IsNotEmpty()
  aumento: boolean;
}
