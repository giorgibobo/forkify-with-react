

export function ProjectReducer(state, action){
    switch (action.type) {
        case "initRecipe":            
            return {...state, recipes: action.value};
        case "changeRecipe":
            return {...state, recipe: action.value}    
        
    }
}