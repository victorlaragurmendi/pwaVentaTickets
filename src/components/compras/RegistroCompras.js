import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import PerfilUsuario from '../usuarios/PerfilUsuario';

const RegistroCompras = () => {

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
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Registro de compras</p></div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Evento Social 1</p></div>

                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Precio</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>$22</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Cantidad</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Subtotal</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-1 "></div>
                        </div>
                        <hr></hr>

                    </div>
                </div>

                <div className="row">
                    <div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Evento Social 2</p></div>

                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Precio</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>$22</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Cantidad</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Subtotal</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-1 "></div>
                        </div>
                        <hr></hr>

                    </div>
                </div>
                <div className="row">
                    <div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Evento Social 3</p></div>

                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Precio</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>$22</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Cantidad</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="col">
                                                <div className="row">
                                                    <p className="d-flex justify-content-center">Subtotal</p> <br></br>
                                                </div>
                                                <div className="row ">
                                                    <div className="d-flex justify-content-center "> <p>2</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-1 "></div>
                        </div>
                        <hr></hr>

                    </div>
                </div>

            </container>
        </>
    )
}

export default RegistroCompras
