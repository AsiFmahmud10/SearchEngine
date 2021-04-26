import { createContext, useContext, useReducer } from "react";
import {Query_interface,QueryState} from './state'

 const StateContext = createContext({})
 
export interface StateContextProviderProps {
    reducer : any
    QueryState : Query_interface
}
const StateContextProvider: React.FC<StateContextProviderProps> = ( {reducer,QueryState,children}) => {  
    return ( <>
                            {/** useReducer return [state , dispatch] */}
        <StateContext.Provider   value = {useReducer(reducer,QueryState)}> 
                {children}  
        </StateContext.Provider>
    </>
 );
}

const useStateContext =()=>  useContext(StateContext) 

export default StateContextProvider;
export{useStateContext}


 
