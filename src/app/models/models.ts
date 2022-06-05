export interface Info{
    id: string;
    direccion: string;
    movil: string;
    fijo: string;
    correo: string;
}


/* Home data */
export interface Resumen{
    consultas: number;
    examenes: number;
    medicamentos: number;
    imagenes: number;
  }
  
  export interface Usuario{
    //InfoBasica
    cedula: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    email: string;
    id: string;
  
    //Info personal
    dob: string;
    groLegal: string;
    estadoCivil: string;
    seguro: string;
    ocupacion: string;
    discapacidad: string;
    gpoSanguineo: string;
    talla: number;
    peso: number;
  }
  
  export interface Contacto{
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
    fhora: string;
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

  export interface Certificado {
    id: string;
    fecha: string;
    tipo: string;
    url: string;
    medico: string;
  }

  export interface Receta {
    id: string;
    femision: string;
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
    femision: string;
    finicio: string;
    indicaciones: string;
    horario: string;
    recepcionista: string;
    medico: string;
  }
  
  //Historia
  export interface Personal{
    id: string;
    cie10: string;
    antecedente: string;
  }

  export interface Familiar{
    id: string;
    cie10: string;
    antecedente: string;
  }

  export interface Cirugia{
    id: string
    cie10: string;
    cirugia: string;
  }

  export interface Alergia{
    id: string;
    cie10: string;
    alergia: string;
  }

  export interface Inmunizacion{
    id: string;
    vacuna: string;
    descripcion: string;
  }

  export interface Medicacion{
    id: string;
    nombre: string;
    finicio: string;
  }



  