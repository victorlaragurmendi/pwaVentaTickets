import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import '../../index.css'



import { connect } from "react-redux";

const PerfilAdministrador = ({eventos}) => {
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                  <div className="flaticon-user"></div>
                    <div className="p-2" >
                    <div className="p-2"  >
                        <a href="/perfilusuario">
                            <i class="fas fa-user"></i>
                            admin
                        </a>
                    </div>
                    <a class="btn btn-danger btn-nueva" href="/"> Cerrar sesión                               </a>
                    </div>
                    
                </div>
                



<div class="row card-body card mr-3">
		

        <div class="container">

<div class="title-box">

  <h1>Gestión de eventos</h1>
  
</div>


<a class="btn btn-primary btn-nueva" href="crearevento"><b>+</b> Crear evento                                   </a>
<table class="table table-bordered grocery-crud-table table-hover">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Descripcion</th>
      
    </tr>
  </thead>
  
  <tbody>
  {eventos.map(j => (
  <tr>
  
      <td>
        {j.nombre}
      </td>
      <td>
        {j.precio} </td>
      <td>
        {j.descripcion}</td>
      
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
  ))}    
  </tbody>

</table>




</div>
 
</div>






            </container>

        </>
    )
}

const mapStateToProps = state => ({

  eventos: state.eventos
})

export default connect(mapStateToProps)(PerfilAdministrador) 
