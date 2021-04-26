export interface Query_interface {
  term: null | string;
}

const QueryState: Query_interface = {
  term: null,
};

interface I_action {
  type: string;
  term: string;
}

const reducer = (state: Query_interface, action: I_action): Query_interface => {
  console.log(action);
  switch (action.type) {
    case "setTerm":
      return {
        ...state,
        term: action.term,
      };
    default:
      return QueryState;
  }
};

export { reducer, QueryState };
