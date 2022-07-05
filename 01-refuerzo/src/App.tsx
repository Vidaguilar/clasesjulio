import TiposBasicos from "./typescript/001-TiposBasicos"
import ObjetosLiterales from "./typescript/002-Objetos-Literales-interfaces"
import Auto from "./typescript/002-ejercicio"
import Funciones from "./typescript/003-funciones"
import Contador from "./components/04-contador";
import Contadorconhooks from "./components/05-contadorConHooks";
import Login  from "./components/0006-Login";
const App = () =>{
return(
  <div className="mt-2">
  <h1>Inicio Con Typescript</h1>
 <hr/>
  
   {/* <TiposBasicos />
  <hr/>
  <ObjetosLiterales/>
  <hr/>
  <Auto/>
  <hr/>
  <Funciones/> 
  <Contadorconhooks/> */}
  <Login/>
  </div>
  
  
)
}
export default App
