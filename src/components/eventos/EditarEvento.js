import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import PerfilUsuario from '../usuarios/EditarPerfilUsuario';

const EditarEvento = () => {

    const [goHome,setgoHome]=useState(false);    

    const handlegoHome=()=>{
        setgoHome(true)
    }
    if(goHome){
        return <PerfilUsuario/>
    }
    
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" onClick={handlegoHome}>icono y nombre</div>
                </div>
                <div className="row">

                    <div>
                        <div className="d-flex justify-content-center mt-5 pt-5 txtiniciarsesion"> <p>Editar Evento</p></div>
                        <div className="d-flex justify-content-center mt-5">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="Nombre Evento" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="Precio" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="Cantidad" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                             
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="descripcion..."></textarea>
                                </div>
                                <div className="col-1"></div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div>
                                <button className="btningresar">Actualizar</button>
                            </div>
                        </div>

                    </div>

                </div>

            </container>
        </>
    )
}

export default EditarEvento
