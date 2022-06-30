
const TiposBasicos = () =>{
    /*let nombre:string|number = 'Vidal';
    nombre=22;*/

    const nombre:string= 'Vidal';
    const edad:number =22;
    const isactivo:boolean = true;
    const poderes:string[]=[];
    const colores:string[] =['Red','Green','Blue']
    const apeido:string= 'Herrejon';
    const sueldo:number= -30;
    const puesto:string= 'Gerente En Desarrollo de actividades inproductivas';
    const Domicilio:string= 'Debajo de el puente de las americas';

    poderes.push('no Chupar Faros')
    poderes.push('no Tener Cruda')
   
    return(
      <>
      <h2>Tipos Basicos</h2>
      <p>Nombre: {nombre} {apeido}</p>
      <p>COlor: {colores.join(', ')}</p>
      <p>Edad:{edad}</p>
      <p>Is:Activo:{isactivo?'Activo':'NoActivo'}</p>
      <p>Poder: {poderes.join(', ')}</p>
      <p>sueldo:{sueldo}</p>
      <p>Puesto:{puesto}</p>
      <p>Domicilio:{Domicilio}</p>
      </>
      
    )
    }
    export default TiposBasicos;
    