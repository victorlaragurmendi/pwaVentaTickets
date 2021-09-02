import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { connect } from "react-redux";

const Pagar = ({ pedido }) => {


    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                </div>
                <div className="row  card-body card">

                    <div>
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Detalle Pedido</p></div>
                            <div>
                        {pedido.map(j => (

                                <div className="d-flex justify-content-center  txtiniciarsesion mt-3" key={j.id}> <p>{j.nombre}</p></div>
                        ))}
                                <hr></hr>
                                {pedido.map(j => (
                                <div className="row mt-3" key={j.id}>
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
                                <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Direccion de Facturacion</p></div>
                                <div className="d-flex justify-content-center ">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="Peru" />
                                </div>
                                <hr></hr>
                                <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Nueva Tarjeta de Pago</p></div>
                                <div className="d-flex justify-content-center mt-2 ">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="Nombre de la tarjeta" />
                                </div>
                                <div className="d-flex justify-content-center mt-2 ">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="Numero del la tarjeta" />
                                </div>
                                <div className="d-flex justify-content-center mt-2 ">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="MM//AA" />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="CSV" />
                                </div>
                                <div className="d-flex justify-content-center mt-2">
                                    <input type="text" className=" " id="inlineFormInputName2" placeholder="Codigo postal" />
                                </div>
                                <div className="row">
                                    <div>
                                        <div className="d-flex justify-content-center mt-5">
                                            <div>
                                                <button className="btningresar" ><a href="/detallecompras">Realizar pago</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps)(Pagar) 
