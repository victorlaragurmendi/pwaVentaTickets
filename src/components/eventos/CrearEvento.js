import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const CrearEvento = () => {


    

    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfiladministrador">icono y nombre</a></div>
                </div>
                <div className="row">

                    <div>
                        <div className="d-flex justify-content-center mt-5 pt-5 txtiniciarsesion"> <p>Evento XYZ</p></div>
                        <div className="d-flex justify-content-center mt-5">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="Nombre Evento" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="precio" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className=" " id="inlineFormInputName2" placeholder="cantidad" />
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
                                <button className="btningresar"  ><a href="/perfiladministrador">Crear</a></button>
                            </div>
                        </div>

                    </div>

                </div>

            </container>
        </>
    )
}

export default CrearEvento
