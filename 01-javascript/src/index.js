import {getHerobyid} from "./data/c8_importatar-exportar"

const getHerobyidAsync = (id) =>{

return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const heroe1=getHerobyid(id);
    const prov =(heroe1)? resolve(heroe1) :reject('alfredo no esta la tierra esta en peligro')
    console.log(prov)
  },2000);
});
}

getHerobyidAsync(7)
.then((heroe)=> console.log(heroe))
.catch((kgaste)=>console.warn(kgaste))