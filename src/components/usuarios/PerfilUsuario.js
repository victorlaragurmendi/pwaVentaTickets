import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import RegistroCompras from '../compras/RegistroCompras';
import Home from '../login/Home';
import IniciarSesion from '../login/IniciarSesion';
import EditarPerfilUsuario from './EditarPerfilUsuario';

const PerfilUsuario = () => {
    const [goHome,setgoHome]=useState(false);  
    
    const [goRegistro,setgoRegistro]=useState(false)

    const [modificarPerfil,setmodificarPerfil]=useState(false)

    const [irAlInicio,setirAlInicio]=useState(false)

    const [cerrasSesion,setcerrarSesion]=useState(false)

    const handlegoRegistro=()=>{
        setgoRegistro(true)
    }

    const handlegoHome=()=>{
        setgoHome(true)
    }
    const handlegoModificarPerfil=()=>{
        setmodificarPerfil(true)
    }
    const handlegoIrAlInicio=()=>{
        setirAlInicio(true)
    }
    const handlecerrarSesion=()=>{
        setcerrarSesion(true)
    }

    if(goRegistro){
        return <RegistroCompras/>
    }
    if(goHome){
        return <PerfilUsuario/>
    }
    if(modificarPerfil){
        return <EditarPerfilUsuario/>
    }
    if(irAlInicio){
        return <Home/>
    }
    if(cerrasSesion){
        return <IniciarSesion/>
    }
    
    

    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" onClick={handlegoHome}>icono y nombre</div>
                </div>
                <div className="row">
                   <div className="col-2"></div> 
                    <div className="col-8">
                        
                            <div className="mt-5">
                                <button className="btningresar w-100 d-block" onClick={handlegoRegistro}>Registro de Compras</button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block " onClick={handlegoModificarPerfil}>Modificar Perfil</button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100 d-block" onClick={handlegoIrAlInicio} >Ir al Inicio</button>
                            </div>
                            <div className="mt-4">
                                <button className="btningresar w-100  d-block" onClick={handlecerrarSesion}>Cerrar Sesion</button>
                            </div>

                    </div>

                    <div className="col-2"></div>

                </div>

            </container>
        </>
    )
}

export default PerfilUsuario
