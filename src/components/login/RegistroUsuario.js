import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const RegistroUsuario = () => {
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    
                </div>
                <div className="row">

                 

                </div>


                <div className="main">
        <p className="sign" align="center">Registro Usuario</p> 
        
       

        <input type="text" className="un" id="inlineFormInputName1" placeholder="nombre" />

        <input type="text" className="un" id="inlineFormInputName1" placeholder="email" />
        
        <input type="password" className="un" id="inlineFormInputName1" placeholder="contraseña" />

        <button className="submit " ><a href="/home">Registrar</a></button>
         
        
      </div> 




            </container>

        </>
    )
}

export default RegistroUsuario
