import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App(){
    const handleSubmit = (term) => {
        searchImages(term);
    }

    return <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
}

export default App;

// 1. handleSubmit function will receive some term
// coming from the child component (searchBar)
// this is whatever the user enters into the text input 
// is going to go back up to handleSubmit. 

// handleSubmit() will get passed down as a prop called OnSubmit
// SearchBar will 
