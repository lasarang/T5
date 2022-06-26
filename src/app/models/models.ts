export interface Info {
  id: string;
  direccion: string;
  movil: string;
  fijo: string;
  correo: string;
}

export interface Resumen {
  consultas: number;
  examenes: number;
  medicamentos: number;
  imagenes: number;
}

export interface Usuario {
  cedula: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  email: string;
  id: string;

  fechaNacimiento: string;
  generoLegal: string;
  estadoCivil: string;
  seguro: string;
  ocupacion: string;
  discapacidad: string;
  grupoSanguineo: string;
  talla: number;
  peso: number;
}

export interface Contacto {
  id: string;
  relacion: string;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  email: string;
}

export interface Imagen {
  id: string;
  titulo: string;
  fechaHora: string;
  descripcion: string;
  url: string;
}

export interface Examen {
  id: string;
  test: string;
  ordenadoPor: string;
  fhora: string;
  url: string;
}

export interface Resultado {
  idOrden: string;
  fechaEmision: string;
  urlResultado: string;
}

export interface SolicitudConsulta {
  cedula: string;
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  fecha: string;
  area: string;
  motivo: string;
}

export interface Certificado {
  id: string;
  fecha: string;
  tipo: string;
  url: string;
  medico: string;
}

export interface Receta {
  id: string;
  fechaEmision: string;
  url: string;
  medico: string;
}

export interface Orden {
  id: string;
  estado: string;
  precio: number;
  femision: string;
  indicaciones: string;
  horario: string;
  medico: string;
  url: string;
}

export interface Cita {
  id: string;
  estado: string;
  fechaEmision: string;
  fechaInicio: string;
  indicaciones: string;
  horario: string;
  recepcionista: string;
  medico: string;
}

export interface Personal {
  id: string;
  cie10: string;
  antecedente: string;
}

export interface Familiar {
  id: string;
  cie10: string;
  antecedente: string;
}

export interface Cirugia {
  id: string
  cie10: string;
  cirugia: string;
}

export interface Alergia {
  id: string;
  cie10: string;
  alergia: string;
}

export interface Inmunizacion {
  id: string;
  vacuna: string;
  descripcion: string;
}

export interface Medicacion {
  id: string;
  nombre: string;
  fechaInicio: string;
}