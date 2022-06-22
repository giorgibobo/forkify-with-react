import { limitRecipeTitle } from "../utils/fn";


const Card = ({id, title, author, image}) => {
    return (
        <div className="flex">
            <img className="w-12 h-12 rounded-full" src={image} alt={title} />
            <div>
                <p>{limitRecipeTitle(title)}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default Card;