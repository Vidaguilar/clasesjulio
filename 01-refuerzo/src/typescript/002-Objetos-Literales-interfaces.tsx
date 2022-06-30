interface Persona{
    Nombre:string
    Apellido:string
    Edad:number
    Direccion:{
        estado:string
        no:string
    }
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
        </>
    )
}
export default ObjetosLiterales