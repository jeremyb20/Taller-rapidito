(() => {
  'use strict';
  angular
  .module('tallerRapidito')
  .controller('controladorUsuarios', controladorUsuarios);

  controladorUsuarios.$inject = ['servicioUsuarios','servicioVehiculos'];

  function controladorUsuarios(servicioUsuarios){
    let vm = this;

    vm.nuevoUsuario = {};

    vm.listaClientes = servicioUsuarios.getUsuarios();

    // Funcion que es llamda desde el html para registra un nuevo usuario
    vm.registrarUsuario = (pnuevoCliente) => {

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoCliente = new Cliente(pnuevoCliente.cedula, pnuevoCliente.nombre, pnuevoCliente.primerApellido, pnuevoCliente.segundoApellido, pnuevoCliente.telefono, pnuevoCliente.email);
 
      console.log(objNuevoCliente)

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioUsuarios.addUsuario(objNuevoCliente)
      
   
      // Retroalimentacion Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoUsuario = null;

      vm.listaClientes = servicioUsuarios.getUsuarios();
    }


    vm.asignarVehiculo = (pObjUsuario) => {

      let cedula = servicioUsuarios.getUsuarios();

      console.log(cedula);

      localStorage.setItem('cedulaSeleccionadaLS', cedula);

      window.location.href = '#!/cars';
    }

    

  }
})();