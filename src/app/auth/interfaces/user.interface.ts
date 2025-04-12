export interface Usuario {
  _id:            string;
  nombre:         string;
  apellido:       string;
  nick:           string;
  email:          string;
  rol:            string;
  departamento:   string;
  activo:         boolean;
  fecha_creacion: Date;
  __v:            number;
  imagen:         string;
}
