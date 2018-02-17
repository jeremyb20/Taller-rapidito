(() => {
  'use strict';
  angular
  .module('tallerRapidito')
  .controller('controladorVehiculos', controladorVehiculos);

  controladorVehiculos.$inject = ['servicioVehiculos','servicioUsuarios'];

  function controladorVehiculos(servicioVehiculos,servicioUsuarios){
    let vm = this;

    vm.nuevoVehiculo = {};

    // vm.listaVehiculos = servicioVehiculos.getVehiculos();
    // debugger;

    // Funcion que es llamda desde el html para registra un nuevo usuario
    vm.registrarVehiculo = (pnuevoVehiculo) => {

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoVehiculo = new Vehiculo(pnuevoVehiculo.matricula, pnuevoVehiculo.marca, pnuevoVehiculo.modelo, pnuevoVehiculo.anno, pnuevoVehiculo.capacidad, pnuevoVehiculo.kilometraje);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioVehiculos.addVehiculo(objNuevoVehiculo)
 
      console.log(objNuevoVehiculo)


      // let objCliente = servicioUsuarios.getUsuarios();
      // objCedula =  buscarClientePorCedula(cedula);

      // objCliente = objCedula;

      // objCliente.agregarVehiculo(objNuevoVehiculo);
      // actualizarCliente(objCliente);
      
      
   
      // Retroalimentacion Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoVehiculo = null;

      vm.listaVehiculos = servicioVehiculos.getVehiculos();
    }


    vm.asignarTarea = (pObjUsuario) => {

      let cedula = servicioVehiculos.getVehiculos();

      console.log(pObjUsuario);

      localStorage.setItem('cedulaSeleccionadaLS', cedula);

      window.location.href = '#!/cars';
    }

    

  }
})();
