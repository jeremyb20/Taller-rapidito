(() => {
  'use strict';
  angular
    .module('tallerRapidito')
    .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log', '$http'];

  function servicioUsuarios($log, $http) {

    let publicAPI = {
      addUsuario: _addUsuario,
      getUsuarios: _getUsuarios
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addUsuario(pnuevocliente) {
      let allClientes = _getUsuarios();
      allClientes.push(pnuevocliente);
      localStorage.setItem('lsClientes', JSON.stringify(allClientes));
    }

function _getUsuarios(){
    let listaClientes = JSON.parse(localStorage.getItem('lsClientes'));
    let clientes = [];

    if(listaClientes == null){
        clientes = [];
    }else{
      listaClientes.forEach(obj =>{
          let objCliente = new Cliente(obj.cedula, obj.nombre, obj.primerApellido,obj.segundoApellido, obj.telefono, obj.email);    
          
          obj.listaVehiculos.forEach(objVehiculoTemp =>{
              let objVehiculo = new Vehiculo(objVehiculoTemp.matricula, objVehiculoTemp.marca, objVehiculoTemp.modelo, objVehiculoTemp.anno, objVehiculoTemp.capacidad, objVehiculoTemp.kilometraje);

              objVehiculoTemp.listaTrabajos.forEach(objTrabajoTemp =>{
                  let objTrabajo = new Trabajo(objTrabajoTemp.nombre, objTrabajoTemp.descripcion, objTrabajoTemp.fecha, objTrabajoTemp.estado, objTrabajoTemp.costo);
                  objVehiculo.agregarTrabajo(objTrabajo);
              });

              objCliente.agregarVehiculo(objVehiculo);
          });
          clientes.push(objCliente);
      })
    }
  return clientes;
}


  function buscarClientePorCedula(pCedula){
    let listaClientes = _getUsuarios();
    
    let clienteEncontrado;
    
    listaClientes.forEach(objClienteTemp =>{
        if(pCedula == objClienteTemp.cedula){
            clienteEncontrado = objClienteTemp;
        };
    });
    return clienteEncontrado;
  }
  
  function actualizarCliente(pObjCliente){
    let listaClientes = _getUsuarios();
        for (let i = 0; i < listaClientes.length; i++){
            if (listaClientes[i].cedula == pObjCliente.cedula){
                listaClientes[i] = pObjCliente;
                localStorage.setItem('lsClientes', JSON.stringify(listaClientes));
            }
        }
  }

}
}) ();