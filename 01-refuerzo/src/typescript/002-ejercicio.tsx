interface Automovil{
    Marca:string
    colores:Colores
    Modelo:string
    Matriculo:string
    dueños:Dueños
}

interface Dueños{
    Dueño1:string
    Dueño2:string
}
interface Colores{
color1:string
color2:string
}
const Auto=()=>{
    const automovil ={
        Marca:'Ford',
        Colores:{
            color1:'azul',
            color2:'rojo'
        },
        Modelo:'Chalenger',
        Matriculo:'r32g4j9',
        Dueños:{
            Dueño1:'Alvaro Alvarez',
            Dueño2:'Pedro Perez'

        }
    }
    return(
        <>
        <h3>Ejercicio</h3>
        <pre>
            {JSON.stringify(automovil,null,1)}
        </pre>
        
        </>
    )
}
export default Auto