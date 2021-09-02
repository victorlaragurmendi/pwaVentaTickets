import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { connect } from "react-redux";

const DetalleCompras = ({ pedido }) => {



    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                </div>
                <div className="row card-body card">

                    <div>
<<<<<<< HEAD
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Detalle Pedido</p></div>
                        {pedido.map(j => (

                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3" key={j.id}> <p>{j.nombre}</p></div>
                        ))}
=======
                       

                        <div class="title-box">

                    <h1>Detalle Pedido</h1>

                    </div>

>>>>>>> 0b7b73947b8697ae32a3224516914d0f0bf627e7
                        <hr></hr>

                        {pedido.map(j => (
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
                        ))}
                        <hr></hr>
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Codigo QR</p></div>
                        <div className="row mt-3">
                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="card ">
                                            <div className="card-body">
                                                <h5 className="card-title">Evento Social 1</h5>
                                                <p className="card-text">aqi va el codigo QR</p>

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

const mapStateToProps = state => ({

    pedido: state.pedido
})

export default connect(mapStateToProps)(DetalleCompras) 
