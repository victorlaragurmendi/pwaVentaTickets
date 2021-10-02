import {createStore,applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState={
    eventos:[
        {id:1,nombre:"Pinturas Goya",precio:25,descripcion:"Muestra de arte Impresionista de las obras mas importantes del exponente Goya"},
        {id:2,nombre:"Ceremonia de Bienvenida a Carlos V",precio:28,descripcion:"Ceremonia de biinevenida al rey Carlos V "},
        {id:3,nombre:"Evento benefico Sonrisas Peru",precio:30,descripcion:"Evento en beneficio de los niños con labis leporino organiza UNIFEC"},
        {id:4,nombre:"Evento benefico para victmas del terrorismo",precio:50,descripcion:"Evento en beneficio de las victimas del terrorismo "},
        {id:5,nombre:"Presentacion de libro El sueño del Celta",precio:15,descripcion:"Presentacion del libro  del autor peruano y nobel Mario Vargas LLosa "},
        {id:6,nombre:"Feria de Arte Romántico",precio:30,descripcion:"Muestra de arte Romantico con obras de los ilustres Victor Hugo, Alejandro Dumas..."},
        {id:7,nombre:"Feria intercultural UNMSM",precio:36,descripcion:"Feria organizada por la comunidad de estudiantes que laboran en el extranjero"},
    ],
    pedido:[
        {id:1,nombre:"Pinturas Goya",precio:25,descripcion:"Muestra de arte Impresionista de las obras mas importantes del exponente Goya"},
    ],
    aux:[],
    total:[0]
    
}


const reducerAdmin =(state=initialState,action)=>{
switch(action.type){
    case 'ADD_TODO':
        return{
            ...state,
             productos:action.payload,
        }
   case 'AGREGAR_EVENTO_CARRITO':
    return {
        ...state,
        pedido: state.pedido.concat(action.j),
    }

    case 'DELETE_TO_CARRITO':
         return{
             ...state,
                   // total:state.total.filter(m=>m.id !== action.payload.id)
       
              pedido:action.payload,
                
                   
                }                                          
            
    case 'DISMINUIR_CANTIDAD':
         return{
                ...state,
                              // total:state.total.filter(m=>m.id !== action.payload.id)
                  
              pedido:action.payload.cartItems,
                           
                              
                }                              
    default:
        return state  
    
}

}

//metodos
const existeItem=()=>{
    console.log('pedido')
}




//acciones

export default createStore(reducerAdmin,composeWithDevTools(applyMiddleware(thunk)))