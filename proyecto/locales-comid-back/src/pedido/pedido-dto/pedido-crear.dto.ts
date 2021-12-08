import { IsNotEmpty, IsNumber } from 'class-validator';

export class PedidoCrearDto {
  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsNumber()
  @IsNotEmpty()
  precioTotal: number;
}
