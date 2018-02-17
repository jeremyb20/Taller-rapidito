(() => {
  'use strict';
  angular
  .module('tallerRapidito')
  .controller('controladorUsuarios', controladorUsuarios);

  controladorUsuarios.$inject = ['servicioUsuarios'];

  function controladorUsuarios(servicioUsuarios){
    let vm = this;

    vm.nuevoUsuario = {};

    // Funcion que es llamda desde el html para regustra un nuevo usuario
    vm.registrarUsuario = (pnuevoUsuario) => {

      // Tomamos el objeto sin formato y lo comvertimos en un objeto de tipo cliente
      let objNuevoUsuario = new Cliente(pnuevoUsuario.cedula, pnuevoUsuario.nombre, pnuevoUsuario.apellidoUno, pnuevoUsuario.apellidoDos, pnuevoUsuario.telefono, pnuevoUsuario.correo);

      console.log('objeto sin formato');
      console.log(pnuevoUsuario);

      console.log('---------')

      console.log('objeto con formato');
      console.log(objNuevoUsuario);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioUsuarios.addUsuario(pnuevoUsuario)

      // Retroalimentacion Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoUsuario = null;
    }

  }
})();