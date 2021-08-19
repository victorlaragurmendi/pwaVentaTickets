import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import DetalleEvento from '../eventos/DetalleEvento'
import PerfilUsuario from '../usuarios/PerfilUsuario'

const Home = () => {

    const [verifydetalleevento, setverifydetallevento] = useState(false)

    const [goHome,setgoHome]=useState(false);    

    const handlegoHome=()=>{
        setgoHome(true)
    }
    if(goHome){
        return <PerfilUsuario/>
    }
    

    const DetalleEvent = () => {
        setverifydetallevento(true)
    }

    if (verifydetalleevento) {
        return <DetalleEvento />
    }
    else {
        return (
            <>
                <container className="fluid fondo">
                    <div className=" navbar  d-flex flex-row-reverse">
                        <div className="p-2" onClick={handlegoHome}>icono y nombre</div>
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
                                                    <a href="#" className="btn btn-primary" onClick={DetalleEvent}>Go somewhere</a>
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

}

export default Home
