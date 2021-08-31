import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const EditarPerfilUsuario = () => {
    
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                </div>
                <div className="row ">

                    <div className="col-8 card-body card"> 

                   
                        
                        <div class="title-box">

                            <h1>Actualizar Perfil</h1>

                        </div>
                        
                        <div className="d-flex justify-content-center mt-5">
                            <input type="text" className="un" id="inlineFormInputName1" placeholder="nombre" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className="un" id="inlineFormInputName2" placeholder="email" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className="pass" id="inlineFormInputName3" placeholder="contraseña" />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div>
                                <button className="btningresar btn btn-info btn-nueva" ><a href="/home">Actualizar</a></button>
                            </div>
                        </div>

                    </div>

                </div>

            </container>
        </>
    )
}

export default EditarPerfilUsuario
