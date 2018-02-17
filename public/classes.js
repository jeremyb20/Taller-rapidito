class Cliente{
  constructor(pCedula, pNombre, pPrimerAppellido, pSegundoApellido, pTelefono, pEmail){
      this.cedula = pCedula;
      this.nombre = pNombre;
      this.primerApellido = pPrimerAppellido;
      this.segundoApellido = pSegundoApellido;
      this.telefono = pTelefono;
      this.email = pEmail;
      this.listaVehiculos = [];
  }
  
  agregarVehiculo(pVehiculo){
      this.listaVehiculos.push(pVehiculo);
  }
}

class Vehiculo{
  constructor(pMatricula, pMarca, pModelo, pAnno, pCapacidad, pKilometraje/*, pAire*/){
      this.matricula = pMatricula;
      this.marca = pMarca;
      this.modelo = pModelo;
      this.anno = pAnno;
      this.capacidad = pCapacidad;
      this.kilometraje = pKilometraje;
      this.listaTrabajos = [];
  }
  agregarTrabajo(pObjTrabajo){   
      this.listaTrabajos.push(pObjTrabajo);
  }
}

class Trabajo{
  constructor(pNombre, pDescripcion, pFecha, pEstado, pCosto){
      this.nombre = pNombre;
      this.descripcion = pDescripcion;
      this.fecha = pFecha;
      this.estado = pEstado;
      this.costo = pCosto;
  }
}