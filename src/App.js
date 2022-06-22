import { useState, createContext, useReducer } from "react";
import Header from "./container/header";
import Recipe from "./container/Recipe";
import SearchList from "./container/searchlist";
import { ProjectReducer } from "./state/Reducer";
import { ProjectState } from "./state/State";


export const StoreContext = createContext();

function App() {

  const [state, dispatchState] = useReducer(ProjectReducer, ProjectState)

   
  
  return (
    <div className="h-screen bg-gradient-to-r from-[#fbdb89] via-[#fbdb89] to-[#f48982] flex justify-center items-center">
      <div className="w-4/5 bg-white rounded-lg shadow-lg shadow-gray-500/50 h-4/5">
        <StoreContext.Provider value={{state, dispatchState}}>
          <Header />
            <div className="flex h-full">
              <div className="w-1/3 border h-4/5">
                <SearchList />
              </div>
              <div className="w-2/3 border h-4/5">
                <Recipe />
              </div>
            </div>
        </StoreContext.Provider>       
      </div> 
    </div>
  );
}

export default App;
