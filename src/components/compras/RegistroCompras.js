import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { connect } from "react-redux";

const RegistroCompras = ({pedido}) => {

  
    return (
        <>
            <container className="fluid fondo ">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                </div>
<<<<<<< HEAD
                {pedido.map(j => (
                <div className="row">
=======
                <div className=" row card-body card ">
>>>>>>> 0b7b73947b8697ae32a3224516914d0f0bf627e7
                    <div>
                        
                        <div class="title-box">

                            <h1>Registro de compras</h1>

                            </div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p><a href="detallecompras">{j.nombre}</a></p></div>

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
<<<<<<< HEAD
                                                    <div className="d-flex justify-content-center "> <p>{j.precio}</p></div>
=======
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
                                                    <div className="d-flex justify-content-center "> <p>$44</p></div>
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

                <div className="row card-body card ">
                    <div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p><a href="detallecompras">Evento Social 2</a></p></div>

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
>>>>>>> 0b7b73947b8697ae32a3224516914d0f0bf627e7
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
<<<<<<< HEAD
                                                    <div className="d-flex justify-content-center "> <p>$50</p></div>
=======
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
                <div className="row card-body card ">
                    <div>
                        <hr></hr>
                        <div className="row mt-3">
                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p><a href="detallecompras">Evento Social 3</a></p></div>

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
>>>>>>> 0b7b73947b8697ae32a3224516914d0f0bf627e7
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
                ))}
             

            </container>
        </>
    )
}


const mapStateToProps = state => ({

    pedido: state.pedido
})

export default connect(mapStateToProps)(RegistroCompras) 
