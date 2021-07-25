import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  boardRef: null,
  resetPuzzle: null,
  undoPuzzle: null,
  hasStarted: false,
  isPaused: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOARDREF":
      //console.log("setting");
      return { ...state, boardRef: action.value };
    case "SET_RESET_PUZZLE":
      return { ...state, resetPuzzle: action.value };
    case "SET_UNDO_PUZZLE":
      return { ...state, undoPuzzle: action.value };
    case "SET_HAS_STARTED":
      return { ...state, hasStarted: action.value };
    case "SET_IS_PAUSED":
      return { ...state, isPaused: action.value };
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
