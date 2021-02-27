import axios from "axios";

const KEY = "AIzaSyDLK5r6VqlNd-jbtEBiCWOnWreYLIIcFb0"
const instance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    }
})
export const youtubeAPI = {
    getVideos: (request) => {
        return instance.get("/search", {params: {q: request}})
    },
    getVideosOnFavoriteClick: (request, maxResults) => {
        return instance.get("/search", {params: {q: request, maxResults: maxResults}})
    }
}

