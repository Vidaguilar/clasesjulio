import { useState } from "react"

 const Contador =() =>{
    const [v,setv]=useState(10);
    const suma = (num:number)=>{
        setv(v+num)
    }
    const resta = (num:number)=>{
        setv(v-num)
    }
    const potencia = (num:number)=>{
        setv(v*num)
    }
    return(

      <>
      <h3> Contador <small>{v}</small></h3>
      <button  onClick={()=>suma(1)}  className="btn btn-primary mr-1">+1</button>
      <button onClick={()=>resta(1)} className="btn btn-primary">-1</button>
      <button onClick={()=>suma(2)} className="btn btn-primary">+2</button>
      
      <button onClick={()=>potencia(2)} className="btn btn-primary">^2</button>
      <button onClick={()=>potencia(0)} className="btn btn-primary">limpiar</button>
      </>
    
    )
 }

 export default Contador