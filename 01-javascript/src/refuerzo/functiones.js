function hm (Nombre){
    return(`hoal ${Nombre}`) 
  }
 
  console.log(hm('vida'))
  
  const hm2=function  (Nombre){
   return(`hoal2 ${Nombre}`) 
 }
 
 console.log(hm2('vida'))
 const hm3=  (Nombre)=>{
   return(`hoal3 ${Nombre}`) 
 }
 
 
 console.log(hm3('vida'))
 const hm4 = (Nombre)=>(`hoal4 ${Nombre}`) 
 
 let caronte="vida"
 console.log(hm4(caronte))

 function dodo (){
    const oi={
      username:'lilither',
      id: '22',
     
    }
    return (oi);
  }
  
  console.log(dodo(oi().id))
  
  const dodo2 = ()=>(dodo.oi) 
  
  console.log(dodo2())