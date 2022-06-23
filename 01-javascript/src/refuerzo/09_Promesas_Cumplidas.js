import {getHerobyid} from "./data/c8_importatar-exportar"




const promesa = new Promise((resolve,reject)=>{
  setTimeout(() => {
    const heroe = getHerobyid(2);
    console.log(heroe)
    resolve(heroe)
  }, 1000);
})


promesa.then ((heroe)=>{
  console.log("2CUMPLIO",heroe);
})

