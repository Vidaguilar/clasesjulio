import { heroes } from "./heroes";
import {name} from  "./heroes"
import {owner} from  "./heroes"


export const getHerobyid = (id)=>{
  
  return heroes.find(element => element.id === id);

}

const getHerobyOwners = (OWN) =>{
  return heroes.filter(heroe => heroe.owner == OWN)
}

//console.log(getHerobyid(1))

//console.log(getHerobyOwners('Televisa'))