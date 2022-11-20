

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

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:"Client-ID tEVijC3cWmTVrC1QLi2CkCJdSKu_pkP18lyn6Ldwods"
        },
        params: {
            query:"cars"
        }
    });
    return response;
};

export default searchImages;       << export this function
    






