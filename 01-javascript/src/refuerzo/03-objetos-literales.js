//objetos literales
const persona={
    nombre: 'vidal',
    pelo:'muy poco',
    estatura:185,
    peso:115,
    pasatiempos :{
      leer :180,
      cocinar: 240,
    }
  }
  const persona2={...persona};
  
  ///console.log(persona);
  ////console.log(`Nombre: ${persona.nombre}`);
  ///console.log(persona.peso);
  ///console.log(persona.pelo);
  ///console.log(persona.estatura);
  ///persona.nombre='juan';
  persona2.nombre='pedro';
  ///console.log(persona.nombre);
  ///console.log(persona.pasatiempos.cocinar)
  
  console.table(persona)
  console.table(persona2)
  for (const property in persona) {
    console.log(`${property}: ${persona[property]}`);
  }
  