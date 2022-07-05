import { useState } from "react"
const useContador=()=>{
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
        {
            v,
            suma:suma,
            resta,
            potencia,
        }
    )
}
export default useContador