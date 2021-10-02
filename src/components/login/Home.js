import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

import { useEffect, createRef } from "react"
import { connect } from "react-redux";

const Home = ({ eventos, pedido, AgregarAlCarrito }) => {

    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2"  >
                        <a href="/perfilusuario">
                            <i class="fas fa-user"></i>
                            usuario
                        </a>
                    </div>
                    
                </div>
                <div className="row card-body card">

                    <div>
                        <div class="title-box">
                            <h1>Eventos</h1>
                        </div>

                        <div className="row">
                            <div className="col-2 "></div>
                            <div className="col-8 ">
                                <div className="input-group  ">
                                    <input type="text" className="form-control" placeholder="buscar evento..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2" >Buscar</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 "></div>
                        </div>


                        <div className="row mt-3">
                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    {eventos.map(j => (
                                        <div className="col-6 " key={j.id}>
                                            <div className="card ">
                                                <div className="card-body">
                                                    <h5 className="card-title">{j.nombre}</h5>
                                                    <p className="card-text">{j.descripcion}</p>
                                                    <p href="" className="btn btn-primary" onClick={() => AgregarAlCarrito(j)} ><a href="/detalleevento">Comprar este evento</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

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


const mapStateToProps = state => ({
    eventos: state.eventos,
    pedido: state.pedido
})

const mapDispatchToProps = dispatch => ({
    AgregarAlCarrito(j) {
        dispatch({
            type: "AGREGAR_EVENTO_CARRITO",
            j
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


