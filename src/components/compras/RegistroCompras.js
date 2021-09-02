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
                {pedido.map(j => (
                <div className="row">
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
                                                    <div className="d-flex justify-content-center "> <p>{j.precio}</p></div>
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
                                                    <div className="d-flex justify-content-center "> <p>$50</p></div>
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
