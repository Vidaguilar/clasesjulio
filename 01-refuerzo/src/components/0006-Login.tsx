import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useReducer } from "react"

interface AuthState{
   validando:boolean,
   token:null | string,
   username:string,
   nombre:string,
}

const initialState:AuthState={
   validando:true,
   token:null,
   username:'',
   nombre:'',
}
type LoginPayload={
   username:'',
   nombre:''
}
type AuthAction=
{type:'logout'}
|{type:'login',payload:LoginPayload}

const authReducer=(state:AuthState,action:AuthAction):AuthState=>{
      switch (action.type) {
         case 'logout':
            return{
               validando:false,
               token: null,
               username:'',
               nombre:'', 
            }
            break;
         case'login':
         return{
            validando:false,
               token: 'black',
               username:action.payload.username,
               nombre:action.payload.nombre, 
         }
         default:
            return state
            break;
      }
}

const Login =() =>{
   const [state, dispatch] = useReducer(authReducer,initialState)
   useEffect(()=>{
      setTimeout(() => {
         dispatch({type:'logout'})
       }, 2000 );
   },[])

   if(state.validando){
      return(
      <>
      <div className="alert alert-info">
      Autenticado........
     </div>
     </>)
   }
    return(
      
       <>

       <h3>Login</h3>
       {
         (state.token)
         ?<div className="alert alert-success">autenticado{state.nombre}</div>
         :<div className="alert alert-danger"> NO ERES TU</div>
       }
       {
         (state.token)
         ?<button className="btn btn-danger">Logout</button>
         : <button className="btn btn-primary">login</button>
       }
       <div className="container mt-2">
       <hr />

       
       
       
      
       
       </div>
       </>
      
    
    )
 }

 export default Login
