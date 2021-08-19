import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'

const Home = () => {

        return (
            <>
                <container className="fluid fondo">
                    <div className=" navbar  d-flex flex-row-reverse">
                        <div className="p-2"  ><a href="/perfilusuario">icono y nombre</a></div>
                    </div>
                    <div className="row">

                        <div>
                            <div className="d-flex justify-content-center  txtiniciarsesion"> <p>Eventos</p></div>

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
                                        <div className="col-6 ">
                                            <div className="card ">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 1</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <p href="" className="btn btn-primary" ><a href="/detalleevento">Go somewhere</a></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="card mr-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 2</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary" ><a href="/detalleevento">Go somewhere</a></a>
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
                                        <div className="col-6 ">
                                            <div className="card ">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 1</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary" ><a href="/detalleevento">Go somewhere</a></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="card mr-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 2</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary" ><a href="/detalleevento">Go somewhere</a></a>
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
                                        <div className="col-6 ">
                                            <div className="card ">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 1</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="card mr-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">Evento Social 2</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default Home
