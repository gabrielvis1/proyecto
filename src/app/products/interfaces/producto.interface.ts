import { Usuario } from "@auth/interfaces/user.interface";

export interface ProductosResponse {
  total:         number;
  paginas:       number;
  pagina_actual: number;
  productos:     Producto[];
}

export interface Producto {
  _id:                        string;
  usuario:                    Usuario;
  nombre:                     string;
  genero:                     string;
  images:                     string[];
  codigo:                     string;
  descripcion:                string;
  cantidad:                   number;
  stock_disponible:           number;
  unidad:                     string;
  deposito:                   string;
  categoria:                  string;
  movimientos:                any[];
  estado:                     string;
  usos:                       string[];
  lotes:                      string[];
  fecha_expiracion:           string;
  proveedor:                  string;
  costo_unitario:             number;
  precio_venta:               number;
  ultima_actualizacion_stock: string;
  alerta_stock_bajo:          boolean;
  alerta_expiracion:          boolean;
  apto_venta:                 boolean;
  motivo_restriccion:         string;
  __v:                        number;
}
