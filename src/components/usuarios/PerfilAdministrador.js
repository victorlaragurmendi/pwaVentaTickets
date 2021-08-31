import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const PerfilAdministrador = () => {
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="perfiladministrador">icono y nombreAdmin </a>
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
      <th>Localización</th>
      <th>Teléfono</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
    <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
          <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
          <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
          <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="editarevento">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
          <tr>
      <td>
        Marqués de Riscal
      </td>
      <td>
        La Rioja </td>
      <td>
        945010203 </td>
      <td>
        test@mail.com </td>
      <td>
        <a class="btn btn-default btn-outline-dark" href="">Editar</a>
        <a class="btn btn-default btn-outline-dark" href="">Borrar</a> </td>

    </tr>
  </tbody>
</table>




</div>
 
</div>






            </container>

        </>
    )
}

export default PerfilAdministrador
