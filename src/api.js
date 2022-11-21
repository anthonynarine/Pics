import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:"Client-ID tEVijC3cWmTVrC1QLi2CkCJdSKu_pkP18lyn6Ldwods"
        },
        params: {
            query:"term"
        }
    });
    return response.data.results;
};

export default searchImages;        