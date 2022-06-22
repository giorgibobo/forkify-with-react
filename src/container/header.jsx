import {BookmarkIcon, PencilAltIcon, SearchIcon} from "@heroicons/react/outline"
import axios from "axios"
import { useContext } from "react"
import { StoreContext } from "../App"




const Header = () => {

    const { dispatchState } = useContext(StoreContext);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const query = e.target[0].value;
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        dispatchState({type: "initRecipe", value: res.data.recipes})
        
    }

    return (
        <div className="flex justify-between bg-gradient-to-r from-gray-50 to-[#f9f5f3] p-4 rounded-lg">
            <img className="w-auto h-12" src="/logo.09084f39.png" alt="logo" />
            <form className="relative flex" onSubmit={submitHandler}>
                <input className="h-12 px-6 text-black bg-white rounded-full focus:outline-none w-96" type="text" name="search" id="search" placeholder="Search over 1,000,000 recipes..." />
                <button className="absolute w-48 h-12 rounded-full -right-16 bg-gradient-to-r from-[#fbdb89] to-[#f48982] text-white">
                    <p className="relative">
                        <SearchIcon className="absolute w-5 h-5 text-white left-12" /> 
                        <span>Search</span>    
                    </p>                   
                    
                    
                </button>
            </form>
            <div className="flex">
                <button className="flex items-center cursor-pointer">
                    <PencilAltIcon className="w-6 h-6 text-[#f48982]" />
                    <p>Add Recipe</p>
                </button>

                <button className="flex items-center cursor-pointer">
                    <BookmarkIcon className="w-6 h-6 text-[#f48982]" />
                    <p>Bookmarks</p>
                </button>               
                
            </div>
        </div>
    )

}

export default Header;