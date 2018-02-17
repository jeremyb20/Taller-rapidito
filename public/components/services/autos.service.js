(() => {
  'use strict';
  angular
    .module('tallerRapidito')
    .service('servicioVehiculos', servicioVehiculos);

  servicioVehiculos.$inject = ['$log', '$http','servicioUsuarios'];

function servicioVehiculos($log, $http,servicioUsuarios) {

    let publicAPI = {
      addVehiculo: _addVehiculo,
      getVehiculos: _getVehiculos
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
  function _addVehiculo(pnuevoVehiculo) {
    let allVehiculos = _getVehiculos();
    allVehiculos.push(pnuevoVehiculo);
    localStorage.setItem('lsVehiculos', JSON.stringify(allVehiculos));
  }

  function _getVehiculos(){
    let cedula = localStorage.getItem('cedulaSeleccionadaLS');
    let cliente = buscarClientePorCedula(cedula);
    let vehiculos = cliente.listaVehiculos;
    return cliente;
  }
  function buscarClientePorCedula(pCedula){
    let listaClientes = servicioUsuarios.getUsuarios();
    
    let clienteEncontrado;
    
    listaClientes.forEach(objClienteTemp =>{
        if(pCedula == objClienteTemp.cedula){
            clienteEncontrado = objClienteTemp;
        };
    });
    return clienteEncontrado;
  }

  function buscarVehiculoPorMatricula(pMatricula){
    let listaVehiculos = _getVehiculos();
    let vehiculoEncontrado;

    listaVehiculos.forEach(objVehiculoTemp => {
        if(pMatricula == objVehiculoTemp.matricula){
            vehiculoEncontrado = objVehiculoTemp;
        }
    });
    return vehiculoEncontrado;
  }
  
  function actualizarVehiculo(pObjVehiculo){
    let listaVehiculos = _getVehiculos();
    let listaClientes = getClientes();
    let cedula = localStorage.getItem('cedulaSeleccionadaLS');
    
    for (let i = 0; i < listaVehiculos.length; i++){
        if (listaVehiculos[i].matricula == pObjVehiculo.matricula){
            listaVehiculos[i] = pObjVehiculo;
            let cliente = buscarClientePorCedula(cedula);
            cliente.listaVehiculos = listaVehiculos;
            actualizarCliente(cliente);
        }
    }
  }


}
}) ();


















  // let listaVehiculos = JSON.parse(localStorage.getItem('lsVehiculos'));
    // let vehiculos = [];

    //   if (listaVehiculos == null) {
    //     vehiculos = []
    //   } else {
    //     listaVehiculos.forEach(obj => {
    //       let objVehiculo = new Vehiculo(obj.matricula, obj.marca, obj.modelo,obj.anno, obj.capacidad, obj.kilometraje);  
          
    //     });

    //     vehiculos.push(objVehiculo);
    //   }
    //   return vehiculos;