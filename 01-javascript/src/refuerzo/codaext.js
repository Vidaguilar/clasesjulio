const cliente = [
    {nombre:'ramiro',
     apellido:'perez'
     ,rfc:'78676037036087'
     ,tel:'4431615224'
  },
    {nombre:'rafa',
    apellido:'perez'
    ,rfc:'7862452037036087'
    ,tel:'4431615224'},
    {nombre:'raul',
    apellido:'perez'
    ,rfc:'7867603hd7036087'
    ,tel:'4432615224'}
  ]
   const terreno=[
     {ancho:20,
    largo:10,
    ppm:10
    }
  ,
    {ancho:5,
    largo:5,
    ppm:10
    },
    {ancho:10,
    largo:10,
    ppm:10
    }
  
   ]
  
   /////const terreno1= terreno[0]
  const area = terreno[0].ancho* terreno[0].largo
  const fp= terreno[0].ppm*area 
  let impuesto = fp* 0.05
  const pfi= fp+impuesto 
  const area2 = terreno[1].ancho* terreno[1].largo
  const fp2= terreno[1].ppm*area 
  let impuesto2 = fp2* 0.05
  const pfi2= fp2+impuesto2 
  const area3 = terreno[2].ancho* terreno[2].largo
  const fp3= terreno[2].ppm*area 
  let impuesto3 = fp3* 0.05
  const pfi3= fp3+impuesto3
  
  console.log(` el largo de el terreno es ${terreno[0].largo} el encho de el terreno es ${terreno[0].ancho} se pago el 
  ${impuesto} como impuetos y el valor 
  sin impuestos es ${fp} el terreno 1 mide ${area} su precio final ${pfi} y 
  lo compro el señor ${cliente[0].nombre}${cliente[0].apellido} con rfc ${cliente[0].rfc} para contactarlo llamar a ${cliente[1].tel}`)
  
  console.log(` el largo de el terreno es ${terreno[1].largo} el encho de el terreno es ${terreno[1].ancho} se pago el 
  ${impuesto2} como impuetos y el valor 
  sin impuestos es ${fp2} el terreno 1 mide ${area2} su precio final ${pfi2} y 
  lo compro el señor ${cliente[1].nombre}${cliente[1].apellido} con rfc ${cliente[1].rfc} para contactarlo llamar a ${cliente[1].tel}`)
    
  console.log(` el largo de el terreno es ${terreno[2].largo} el encho de el terreno es ${terreno[2].ancho} se pago el 
  ${impuesto3} como impuetos y el valor 
  sin impuestos es ${fp} el terreno 1 mide ${area} su precio final ${pfi3} y 
  lo compro el señor ${cliente[2].nombre}${cliente[2].apellido} con rfc ${cliente[0].rfc} para contactarlo llamar a ${cliente[0].tel}`)
    
  
  for (let i = 0; i < 3; i++) {
    const terreno1= terreno[i]
  const area = terreno1.ancho* terreno1.largo
  const fp= terreno1.ppm*area 
  let impuesto = fp* 0.05
  const pfi= fp+impuesto 
  const cliente1= cliente[i]
  console.log(` el largo de el terreno es ${terreno1.largo} el encho de el terreno es ${terreno1.ancho} se pago el 
  ${impuesto} como impuetos y el valor sin impuestos es ${fp} el terreno 1 mide ${area} su precio final ${pfi} y lo compro el señor ${cliente1.nombre}${cliente1.apellido} con rfc ${cliente1.rfc} para contactarlo llamar a ${cliente1.tel}`)
    
  }