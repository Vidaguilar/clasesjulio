const anmial={
    especie:'felino',
    nombreComun:'gato',
    colorpelaje:'azul',
    raza:'esfinge',
    edad:3,
    apodo:{
      apodo1:"michi",
      apodo2:"chesire"
    }
  }
  console.log(anmial.nombreComun)
  
  //const especie = anmial.especie
  const{especie,raza}=anmial;
  console.log(`especie: ${especie} \n Raza: ${raza}`)
  
  
  const imprimeAnimal = (anmial)=>{
    const{especie,nombreComun}=anmial
    console.log(`ESPECIE: ${especie}`)
    console.log(`NOMBRE COMUN: ${nombreComun}`)
  }
  console.log(`___________------------------**************`)
  imprimeAnimal(anmial);
  
  const imprimeAnimal2 = ({especie,nombreComun})=>{
   
    console.log(`ESPECIE: ${especie}`)
    console.log(`NOMBRE COMUN: ${nombreComun}`)
  }
  console.log(`___________------------------**************`)
  imprimeAnimal2(anmial);
  const imprimeAnimal3 = (anmial)=>{
    const{especie,nombreComun,apodo}=anmial
    const{apodo1,apodo2}=apodo
    console.log(`Apodo: ${apodo2} Especie: ${especie} Nombre Comun:${nombreComun}`)
    
  }
  console.log(`___________------------------**************`)
  imprimeAnimal3(anmial);