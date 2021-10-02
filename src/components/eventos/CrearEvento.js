import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const CrearEvento = () => {


    

    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                <div className="p-2"  >
                        <a href="/perfilusuario">
                            <i class="fas fa-user"></i>
                            admin
                        </a>
                    </div>
                </div>
                <div className="row  card-body card">


                <div class="title-box">

                <h1>Crear evento</h1>

                </div>

                    <div>
                        <div className="d-flex justify-content-center mt-5">
                            <input type="text" className="un" id="inlineFormInputName2" placeholder="Nombre Evento" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className="un" id="inlineFormInputName2" placeholder="precio" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <input type="text" className="un" id="inlineFormInputName2" placeholder="cantidad" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">

                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10 un">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="descripcion..."></textarea>
                                </div>
                                <div className="col-1"></div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <div>
                                <button className="btningresar btningresar btn btn-info btn-nueva"  ><a href="/perfiladministrador">Crear</a></button>
                            </div>
                        </div>

                    </div>

                </div>

            </container>
        </>
    )
}

export default CrearEvento
