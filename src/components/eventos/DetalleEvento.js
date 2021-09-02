import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

import {useState,useEffect} from 'react'
import {connect} from 'react-redux'


const DetalleEvento = ({pedido}) => {

  const [count, setCount]=useState(0)
  const [subtotal, setSubTotal]=useState(0)

 
  const suma=()=>{
    setCount(count +1)
    setSubTotal((count+1)*25)
    
  }
  const resta=()=>{
    setCount(count -1)
    setSubTotal((count-1)*25)
  }

 
    return (
        <>
            <container className="fluid fondo">
                <div className=" navbar  d-flex flex-row-reverse">
                    <div className="p-2" ><a href="/perfilusuario">icono y nombre</a></div>
                </div>
                <div className="row">
                { pedido.map(j=>(
                    <div key={j.id}>
                        <div className="d-flex justify-content-center  txtiniciarsesion mt-3"> <p>Eventos seleccionado</p></div>

                    
                        <div className="row mt-3">
                            <div className="col-1 "></div>
                            <div className="col-10 ">
                                <div className="row">
                                    <div className="col-12 ">
                                        <div className="card ">
                                            <div className="card-body">
                                                <h5 className="card-title">{j.nombre}</h5>
                                                <p className="card-text">{j.descripcion}</p>
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
                                                    <div className="d-flex justify-content-center "> <p>$25</p></div>
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
                                                    <div className="d-flex justify-content-center "> <p>
                                                        <button onClick={suma } >+</button>
                                                       {count} 
                                                       <button onClick={resta} >-</button>
                                                       
                                                    </p></div>
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
                                                    <div className="d-flex justify-content-center "> <p>{subtotal}</p></div>
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
                ))}
                </div>

            </container>

        </>
    )


}
const mapStateToProps = state=>({
    pedido:state.pedido,
    total:state.total

})

const mapDispatchToProps =dispatch=>({
 

})



export default  connect(mapStateToProps,mapDispatchToProps)(DetalleEvento);
