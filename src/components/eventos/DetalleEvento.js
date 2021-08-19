import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const DetalleEvento = () => {

 
        return (
            <>
                <container className="fluid fondo">
                    <div className=" navbar  d-flex flex-row-reverse">
                        <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                    </div>
                    <div className="row">

                        <div>
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Evento Social 1</p></div>


                            <div className="row mt-3">
                                <div className="col-1 "></div>
                                <div className="col-10 ">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <div className="card ">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 1</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-1 "></div>
                            </div>

                            <div className="row mt-3">
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
                                                        <div className="d-flex justify-content-center "> <p>$44</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div>

                                            <div className="d-flex justify-content-center mt-5">
                                                <div>
                                                    <button className="btningresar" ><a href="/pagar">Comprar ahora</a></button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-1 "></div>
                            </div>

                        </div>

                    </div>

                </container>

            </>
        )
    

}

export default DetalleEvento
