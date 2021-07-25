import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = { boardRef: null, resetPuzzle: null, undoPuzzle: null };

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOARDREF":
      //console.log("setting");
      return { ...state, boardRef: action.value };
    case "SET_RESET_PUZZLE":
      return { ...state, resetPuzzle: action.value };
    case "SET_UNDO_PUZZLE":
      return { ...state, undoPuzzle: action.value };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
