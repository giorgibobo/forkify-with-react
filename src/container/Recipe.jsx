import { useContext } from "react";
import { StoreContext } from "../App";


const Recipe = () => {

    const {state} = useContext(StoreContext);

    return(
        state.recipe &&   <div>
                        <img src={state.recipe.img} alt={state.recipe.title} />
                        <p>{state.recipe.title}</p>
                        <div>
                            {
                                state.recipe.ingredients.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))
                            }
                        </div>
                    </div>

    )
}

export default Recipe;