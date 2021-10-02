import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { connect } from "react-redux";
import logo from "../../codigoqr.png"
const DetalleCompras = ({ pedido }) => {



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
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Detalle Pedido</p></div>
                        {pedido.map(j => (

                            <div className="d-flex justify-content-center  txtiniciarsesion mt-3" key={j.id}> <p>{j.nombre}</p></div>
                        ))}
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
                                            <div className="card-body d-flex justify-content-center"  >
                                                <p className="card-text">
                                               <img src={logo} width="150px" height="150px"></img>
                                                </p>

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
