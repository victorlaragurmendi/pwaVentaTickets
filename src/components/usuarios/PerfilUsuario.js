import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const PerfilUsuario = () => {


    return (
        <>
            <container className="fluid fondo ">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2">icono y nombre</div>
                </div>
                <div className="row   ">
                   <div className="col-2 "></div> 
                    <div className="col-8 card-body card">
                        

                                <div class="title-box">

                                    <h1>Gestión de Perfil</h1>

                                </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block btn btn-outline-secondary btn-nueva"  ><a href="registrocompras">Registro de Compras</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block btn-outline-secondary btn-nueva" ><a href="editarperfilusuario">Modificar Perfil</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block btn-outline-secondary btn-nueva"  ><a href="/home">Ir al Inicio</a></button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100  d-block btn-outline-secondary btn-nueva" ><a href="/">Cerrar Sesion</a></button>
                                
                            </div>

                    </div>

                    <div className="col-2"></div>

                </div>

            </container>
        </>
    )
}

export default PerfilUsuario
