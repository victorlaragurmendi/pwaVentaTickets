import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const IniciarSesion = () => {

  
  return (
    
      <container className="fluid fondo">
        <div className=" navbar  d-flex flex-row-reverse">
          <div className="p-2">icono</div>
        </div>
        <div className="row">
          <div>
            <div className="d-flex justify-content-center mt-5 pt-5 txtiniciarsesion"> <p>Iniciar Sesion</p></div>

            
            <div className="d-flex justify-content-center mt-5">
              <input type="text" className=" " id="inlineFormInputName1" placeholder="email" />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <input type="text" className=" " id="inlineFormInputName2" placeholder="contraseña" />
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div>
                <button className="btningresar" ><a href="/home">Ingresar</a></button>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3 ">
              <div>
                <button className="btningresar" ><a href="/perfiladministrador">Ingresar como Admin (Pruebas)</a></button>
              </div>
            </div>
            
            <div className="d-flex justify-content-center mt-5 txtnotienescuenta"><a href="/registrousuario">no tienes cuenta registrate</a></div>
          </div>
        </div>
      </container>


  )
}



export default IniciarSesion

