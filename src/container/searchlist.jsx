import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../App";
import Card from "./card";


const SearchList = () => {

    const { state, dispatchState } = useContext(StoreContext);
    
    
    const clickHandler = async (id) => {
        const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        const obj = {
            id,
            title: res.data.recipe.title,
            author: res.data.recipe.publisher,
            img: res.data.recipe.image_url,
            url: res.data.recipe.source_url,
            ingredients: res.data.recipe.ingredients
        }
        dispatchState({type: "changeRecipe", value: obj});
    }


    return (
        <div className="flex flex-col">
            {
                state.recipes && state.recipes.map((el, index) => (
                    <button key={index} onClick={() => clickHandler(el.recipe_id)} >
                         <Card title={el.title} author={el.publisher} image={el.image_url} />
                    </button>
                   
                ))   
            }

        </div>
    )
}

export default SearchList;