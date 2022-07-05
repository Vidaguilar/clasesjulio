import { useState } from "react"
import useContador from  "../hooks/005-useContador"

const Contadorconhooks =() =>{
    const{suma,v,resta,potencia}= useContador();
    return(

      <>
      <h3> Contador Contadorconhooks <small>{v}</small></h3>
      <button  onClick={()=>suma(1)}  className="btn btn-primary mr-1">+1</button>
      <button onClick={()=>resta(1)} className="btn btn-primary">-1</button>
      <button onClick={()=>suma(2)} className="btn btn-primary">+2</button>
      
      <button onClick={()=>potencia(2)} className="btn btn-primary">^2</button>
      <button onClick={()=>potencia(0)} className="btn btn-primary">limpiar</button>
      </>
    
    )
 }

 export default Contadorconhooks

