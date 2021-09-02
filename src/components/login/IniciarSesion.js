import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const IniciarSesion = () => {

  
  return (
    
      <container className="fluid fondo">
        <div className=" navbar  d-flex flex-row-reverse">
          <div className="p-2">icono</div>
        </div>




      <div className="main">
        <p className="sign" align="center">Iniciar sesión</p> 
        
       

        <input type="text" className="un" id="inlineFormInputName1" placeholder="email" />

        <input type="password" className="pass" id="inlineFormInputName1" placeholder="contraseña" />
        
        <button className="submit btn-primary" ><a href="/home">Ingresar</a></button>
        <p className="forgot" align="center"><a href="/perfiladministrador">Ingresar como Admin (Pruebas)</a></p> 
        <p className="forgot" align="center"><a  href="/registrousuario">no tienes cuenta registrate</a></p> 

      </div> 
       
      </container>


  )
}



export default IniciarSesion

