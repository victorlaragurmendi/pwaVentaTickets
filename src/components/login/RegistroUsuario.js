import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const RegistroUsuario = () => {
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2">icono</div>
                </div>
                <div className="row">

                    <div>
                        <div className="d-flex justify-content-center mt-5 pt-5 txtiniciarsesion"> <p>Registro Usuario</p></div>
                        <div className="d-flex justify-content-center mt-5">
                            <input type="text" className=" " id="inlineFormInputName1" placeholder="nombre" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="email" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName3" placeholder="contraseña" />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div>
                                <button className="btningresar" ><a href="/home">Registrar</a></button>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </container>

        </>
    )
}

export default RegistroUsuario
