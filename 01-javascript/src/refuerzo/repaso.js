let matricula= 'utm190009ti'
const nombre ='Vidal'
const salida = `nombre: ${nombre} con matricula ${matricula}`
///objeto
const campeonatos=
['mundial','interconital','usa','parejas',]
const jugador = {
    posicion:'medio'
    ,nombre: 'Miguel',
    apode:'piojo',
    dorsal:'7',
    pie_dom:'izq'
}
const luchador = {
    
    nombre: 'Rey Misterio',
    campeonatos,
    
    nacionalidad:['mexicana','americana'],
    Estatura:165 ,
    marca:'raw'
}
for (const property in luchador) {
  console.log(`${property}: ${luchador[property]}`);
}
console.log(luchador.campeonatos[2])