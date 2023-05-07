import React from "react";
import Anime from "./Anime";

const Search = () => {
    const [searchedAnime, setSearched] = React.useState('Bleach');

    const searchAnime = () => {
        const field = document.getElementById("animeInputBox");
        if (!field.value) {
            alert("Please Enter Valid Anime Name");
            return;
        }
        setSearched(field.value);
    };


    return (
        <div>
            <input
                type="text"
                id="animeInputBox"
                placeholder="Anime"
            />
            <button
                onClick={searchAnime}
                type="button"
            >Search Anime</button>
            <p>Showing results for {searchedAnime}</p>
            <Anime searched={searchedAnime} />
        </div>

    );
};
export default Search;
