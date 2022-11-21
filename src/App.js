import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import {useState} from "react";

function App(){
    const[images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    }

    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
    </div>
}

export default App;

// 1. handleSubmit function will receive some term
// coming from the child component (searchBar)
// this is whatever the user enters into the text input 
// is going to go back up to handleSubmit. 

// handleSubmit() will get passed down as a prop called OnSubmit
// SearchBar will 
