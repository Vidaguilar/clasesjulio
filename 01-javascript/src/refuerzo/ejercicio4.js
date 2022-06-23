////7arreglos
let arreglo =[
    1,2,3
    ];
    let array =[
      'vidal',
        'muy poco',
        85,
        115,
        180,
        180,
          ]
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
    console.log(arreglo)
    console.log(arreglo.length)
    let i=arreglo.length
    arreglo.push(4);
    arreglo.push(5);
    arreglo= [...arreglo,6]
    const arreglo2=[...arreglo]
    
    for (let index = 0; index < arreglo.length; index++) {
      const element = arreglo[index];
      console.log(arreglo[index])
     
    }
    arreglo2[2]=22
    for (let index = 0; index < arreglo2.length; index++) {
      const element = arreglo2[index];
      console.log(arreglo2[index])
     
    }
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log(array[index])
     
    }