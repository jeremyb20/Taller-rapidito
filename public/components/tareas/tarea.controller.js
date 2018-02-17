(()=>{
  'use strict';
  angular
  .module('tallerRapidito')
  .controller('controladorTareas', controladorTareas);

  controladorTareas.$inject = ['servicioUsuarios'];

  function controladorTareas(servicioUsuarios){
    let vm = this;

    vm.nuevaTarea = {};

    vm.listaTarea = servicioUsuarios.getUsuarios();

    vm.registrarTarea = (pnuevaTarea) =>{
      let objNuevaTarea = new Tarea(pnuevaTarea.nombreTarea, pnuevaTarea.descripcion, pnuevaTarea.fecha, pnuevaTarea.estado, pnuevaTarea.costo);


      servicioUsuarios.addUsuario(pnuevaTarea)
      vm.listaTarea = servicioUsuarios.getUsuarios();

      swal("Registro exitoso", "La tarea ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      vm.nuevaTarea = null;
    }
  }


})();