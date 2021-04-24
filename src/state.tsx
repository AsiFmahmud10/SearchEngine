export interface  I_initialState{
     term : null | string
}

const initialState : I_initialState={
        term : null
}

interface I_action {
    type:string
    term:string
}

const reducer =  (state: I_initialState, action:I_action) =>{
    console.log(action)
            switch (action.type){
                case "setTerm":
                    return {
                        ...state,
                        term: action.term
                    }
            }

}

export {reducer, initialState}