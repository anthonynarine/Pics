import {useState} from "react";

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit("cars");
        
    };
    
    const handleChange = (event) => {
        // console.log(event.target.value);
        setTerm(event.target.value)

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}


export default SearchBar;

// handleSubmit function will receive some term
// coming from the child component (searchBar)
// whatever the user enters into the text input 
// is going to go back up to handleSubmit. 

//  ~ Event handler wraping a input in a form 
//    and shutting off automatic behaviors ~

//Anytime we wire up and event handler on a plane
//element we're always going to have our event handler
//receive that event Object. as shown below. it not required
//but there if we need to use it.
// const handleFormSubmit = (event) => {
//     event.preventDevault();
//in this case we will use it to shut off the automatic
//request that the forms element does when the enter key 
//is pressed or a submit button is clicked.

// ~ getting the value of the input out
//   and passing it to the parent (onSubmit) ~
