import {React,useState} from 'react'

import Home from '../components/login/Home';
import IniciarSesion from '../components/login/IniciarSesion';
import RegistroUsuario from '../components/login/RegistroUsuario';



const AppRouter = () => {

  const [verifytoken,setverify]=useState(false)
  const [verifyacount,setverifyacount]=useState(false)
 


  const hndleButton =()=>{
    setverify(true)
    
  }
  const hndlCreateAcount =()=>{
    setverifyacount(true)
  }
 
  
  if(verifytoken){
    return <Home/>
  }
  if(verifyacount){
    return <RegistroUsuario/>
  }
  
   return <IniciarSesion hndleButton={hndleButton} hndlCreateAcount={hndlCreateAcount}/>
}



  
export default AppRouter
