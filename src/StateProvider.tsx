import { createContext, useContext, useReducer } from "react";
import {I_initialState} from './state'
 const StateContext = createContext({})

 

export interface StateContextProviderProps {
    reducer : any
    initialState : I_initialState
}
const StateContextProvider: React.FC<StateContextProviderProps> = ( {reducer,initialState,children}) => {  
    return ( <>
        <StateContext.Provider   value = {useReducer(reducer,initialState)}>
                {children}  
        </StateContext.Provider>
    </>
 );
}

const useStateContext =()=>  useContext(StateContext) 

export default StateContextProvider;
export{useStateContext}


 
