import { IsNumber, IsOptional } from 'class-validator';

export class PedidoEditarDto {
  @IsNumber()
  @IsOptional()
  cantidad: number;

  @IsNumber()
  @IsOptional()
  precioTotal: number;
}
