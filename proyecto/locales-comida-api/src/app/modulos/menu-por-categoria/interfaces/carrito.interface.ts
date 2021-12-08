export interface CarritoInterface {
  cliente: string;
  menus: MenuInterface[];
}

export interface MenuInterface {
  nombre: string;
  precioUnitario: number;
  menu?: string;
  categoria?: string;
  id?: number;
  nCantidad?: number; //cantidad en pedido
  precioTotal: number ;
  productos?: [];
}

export interface ProductoInterface {
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}
