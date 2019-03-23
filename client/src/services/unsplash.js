import axios from "axios";

//Axios allows definition of a base instance in which we can define a URL and any other configuration elements.
const unsplash = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
});

export const searchPhotos = async (searchTerm) => {
    const response = await unsplash.get(`/search/photos?query=${searchTerm}`);
    return response.data.results;
}