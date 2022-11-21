

                ~ Search Bar ~
The app will be communicating with Unsplas APi.

    ~ HTTP Request & Response ~

    React does not have tools, object, functions for 
    making HTTP Request. It only cares about displaying 
    content and handling user events

    We will Write out our logic and data fetching without
    worring about React.  

    This app will will be communicationg with an Unsplash API

    ~ Request ~
      A request is divided into 3 parts:

        1. Request line:
            will contain the request type, route url & query string
        Gethttps://api.unsplash.com/search/photos?query=seasons
        
        2. Headers
            Headers are used to customize the request. In many cases headers are used to provide authentication. 
        Authorization: Client-ID <api key here>

        3. Body
            Will contain the imformation we are lookning for 

    ~ Response ~
        Also divided into 3 parts

        1. Status line
            http/1.1 200 ok  () 

        2. Header:
            Content-Type: application/jason
        
        3. Body:
            May or My ot include info

    Think of this The request/response system as texting 

   
                 ~ Unsplash API ~
    1. navitage to developers page
    2. create app
    3. copy acces key
        This key is used in ever Request method we make
    
    4. Go to documentation
       > schema > location 
      ~ Requesting access to the api wil require a route URL
        this info in found in the location section

    5. Navigate to Authoriztion section
       > public authentication
            ~Requesting data from the API will HAVE to include
             a special Header. The header is found in public auth. 
        Authorization: Client-Id tevijc...etc


    6. Navigate to the Search section
        Requesting data will include a query string. Inside that
        query string we will include a query parameter that's going 
        to have a value of whatever our search term is. This section provides documentation on this syntax.  

        WE Now have:
            Route URL -  https://api.unsplash.com
            Query string - /search/photos?query=ocean
            Authorization: Client-ID <access key here>

     
                     ~ Axios ~ 
    Axiox is a Js library that us to make HTTP Request with different
    methods. We will be using library in this app

        ~ to install:
            nmp install axios

        ~ in src folder create api.js file
          All code to communicate with Unsplash Api will be held here

        ~ import axios - import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:"Client-ID tEVijC3cWmTVrC1QLi2CkCJdSKu_pkP18lyn6Ldwods"
        },
        params: {
            query:"terms"
        }
    });
    return response.data.results;
};

export default searchImages;       << export this function

// We return only the data that we want which will be an array of images
//and not the entire object
    

             ~  async /  await ~

    This Key:Word tell Js to chill and Wait for RESPONSE
       to come back and once we get that response we can 
       go ahead and return it. 

       if you want to use a WAIT inside a function you 
       MUST mark the enclosing function wit the async keyword. 


 ~ to the React end:
    Questions to keep in mind

    How does data flow through a React app?

    Where do we do data fetching?

    Where do we define state?

    How do we share info between components?

~ facts of This App ~
    1. The SearchBar component contains the text input
       a user will type in
 
    2. The user pressing the "enter" key in the text 
       means we need to do a search

    3. We have a function that will turn a search term
       into an array of image object. 

    4. The array of image objects need to get into 
       the imageList component. 

    

    ~ Flow of data ~ 
    In React Sibling components cannot directly communicate with each other
    so we involve the parent compeonet to share info between the siblings

    in short whenever the user enters a search term (SearchBar) and then presses 
    the enter key we need to get the search term up to the parent 
    component (App) and once we produce the list of images we need to 
    get that data down to the other child (ImageList)

    ~ To do this we will use the Props system.  (See appHierachy diagram)
    
    ~ 2nd task is to get the search term from SearchBar (child) up to the 
      parent (App). We cannot use the prop system because it usually 
      communicates info from a parent to a child. 
        ~Mystery to Figure out

    ~ to communicate data from a child to a parent we can use an Event 
      handler. See UMl diagram of data flow. 

      ~ in Apps (parent)
        Create a handleSubmit function this will receive some term
            coming from the child component (searchBar)
            this is entered by the user then it goes back
            up to handleSubmit. 

        handleSubmit() will get passed down as a prop called OnSubmit
        SearchBar will 


    ~ Detecting a User Pressing the Enter Key
        Wrap an <input /> element with a form element.
        This has noting to do with JS or React.
        This is a stardard thing in html. 

        if you ever place an input element inside a form
        elemnt and  press the enter key, your browser is goigng to cause this form element to automatically trigger an event called a Submit event. This particular structure is again an HTML standard We can listen to this event. 

        order of operation:
         1. user selects input presses the enter key. This triggers a submit event form
         2. The form event is going to look at whatever value (prop) 
            was passed to onSubmit and call it.

        3. getting the current value out of our imput and into 

            Where we currently are

            handleSubmit uses prop system
            to listen for the enter key being pressed.
            
           SearchBar is using an input ele. wrapped in a 
           form ele with the forms automatic functionality 
           turned off. 

           we need to get user tex input back up to handleSubmit
           ~Handling Text Inputs
            1. Create a new piece of state.
                in searchBar import {useState}
                const [term, setTerm] = useState("");

            2. create an event handler to watch for the "onChange" event
               changes will include user adding text, deleting text, paste text etc

                   const handleChange = () => {

                      }

                   <input onChange={handleChange}/>


            3. When the "onChange" event fires, get the value from the input
                    const handleChange = (event) => {
                        console.log(event.target.value); 

                we just want the event.target.value (run this console log if you are confused ;/)
                    if anyone is reading this i'm struggling making a mental note hopefully i
                    can come back and laugh at myself one day.  

            4. Take that value from the input and use it to update our state. 

            5.  Finally Pass your state to the input as the value prop.   

                    ~ Completely Wired up and Input elemtnt in React ~ 

                    function SearchBar({onSubmit}) {
                        const [term, setTerm] = useState("");

                        const handleFormSubmit = (event) => {
                            event.preventDefault();        
                            onSubmit("term");       
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


passing our term value into the searchImage function in api.js
 
1. import searchImage into the app component. 
2. call searchImages and pass in term

import SearchBar from "./components/SearchBar";
import searchImagess from "./api";

    function App(){
        const handleSubmit = (term) => {
            searchImages(term);
        }

        return <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    }

    export default App;


      ~  async / await is needed when we call searchImages with term.
        this will allow for the request to return the user's input.

NEXT STEP - we need to communicate the results of searchIages(term)
        down to our Imagelist. we do this using props. 

            function App(){
                const handleSubmit = async (term) => {
                    const result = await searchImages(term);

                    console.log(result)
                }

                return <div>
                    <SearchBar onSubmit={handleSubmit}/>
                </div>
            }

            note that the function has been updated to wait for a response and we stored the response in the variable results.

            results is now the array of objects (images) 


    1. First we need to show the images inside the App
        import ImageList from "./components/ImageList";
    
    2. Make use of that right after the searchBar element.
            return <div>
                <SearchBar onSubmit={handleSubmit}/>
                <ImageList /> ***
            </div>

    3. now that the search is complete and we have a response
       we need to update the content on the screen with the new
       list of images. Remember whenever we need to update content 
       on screen it always means we are using the state system   

    NOTE when state updates the components and all it's 
         children are re-rendered as well. 






    