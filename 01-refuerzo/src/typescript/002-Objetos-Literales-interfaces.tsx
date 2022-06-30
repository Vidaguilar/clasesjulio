interface Persona{
    Nombre:string
    Apellido:string
    Edad:number
    direccion:Direccion
}

interface Direccion{
    estado:string
    no:string
}

const ObjetosLiterales=()=>{
    const persona ={
        Nombre:'pedro',
        Apellido:'Perez',
        Edad:26,
        Direccion:{
            estado:'Michoacan',
            no:'45'
        }
    }
    return(
        <>
        <h3>Objetos literales con interfaces</h3>
        <pre>
            {JSON.stringify(persona,null,1)}
        </pre>
        <p>Nombre: {persona.Nombre}</p>
        <p>Apellido:{persona.Apellido}</p>
        <p>edad:{persona.Edad }</p>
        <p>Direccion:{persona.Direccion.estado},{persona.Direccion.no}</p>
        </>
    )
}
export default ObjetosLiterales