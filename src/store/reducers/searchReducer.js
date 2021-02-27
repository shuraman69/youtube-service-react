import {youtubeAPI} from "../../api/api";

const SET_VIDEOS = 'SET_VIDEOS'
const SET_VIDEO_DETAIL = 'SET_VIDEO_DETAIL'
const initialState = {
    videos: {
        items: [],
        totalResult: null,
        searchRequest: null
    },
    videoId: ''
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return {
                ...state,
                videos: {items: action.videos, totalResult: action.totalResults, searchRequest: action.request}
            }
        case SET_VIDEO_DETAIL:
            return {
                ...state,
                videoId: action.videoId
            }
        default:
            return state
    }
}


//отправляю запрос за роликами на сервер , записываю их в стейт
export const setVideos = (videos, totalResults, request) => ({type: SET_VIDEOS, videos, totalResults, request})
export const getVideosThunk = (request) => {
    return async (dispatch) => {
        const videos = await youtubeAPI.getVideos(request)
        dispatch(setVideos(videos.data.items, videos.data.pageInfo.totalResults, request))
    }
}

//сохраняю Id выбранного видео
const setVideoIdAC = (videoId) => ({type: SET_VIDEO_DETAIL, videoId})
export const setVideoId = (videoId) => {
    debugger
    return async (dispatch) => {
        dispatch(setVideoIdAC(videoId))
    }
}
export default searchReducer