import {setVideos} from "./searchReducer";
import {youtubeAPI} from "../../api/api";

const SET_FAVORITE = 'SET_VIDEOS'
const SET_FAVORITE_FROM_LOCAL_STORAGE = 'SET_FAVORITE_FROM_LOCAL_STORAGE'
const initialState = {
    favoriteRequests: []
}
const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            if (action.favoriteRequest === undefined) {
                return state
            }
            return {
                ...state,
                favoriteRequests: [...state.favoriteRequests, action.favoriteRequest]
            }
        case SET_FAVORITE_FROM_LOCAL_STORAGE:
            return {
                ...state,
                favoriteRequests: action.favoriteRequests
            }
        default:
            return state
    }
}

//индексирую сохраненные запросы
const getId = (getState) => {
    return getState().favorite.favoriteRequests.length
}
////////////////////////
//Сохранение запросов из локального хранилища
export const setFavoriteFromLocalStorage = (favoriteRequests) => ({
    type: SET_FAVORITE_FROM_LOCAL_STORAGE,
    favoriteRequests
})
//добавление сохраненного запроса пользователем
const setFavoriteRequest = (favoriteRequest) => ({type: SET_FAVORITE, favoriteRequest})
export const saveFavoriteRequest = (favoriteRequest) => {
    return (dispatch, getState) => {
        favoriteRequest.id = getId(getState)
        dispatch(setFavoriteRequest(favoriteRequest))
    }
}


//отправка запроса на сервер, при клике на сохраненный запрос в favoriteList
export const getVideosOnFavoriteRequest = (request, range) => {
    return async (dispatch) => {
        const videos = await youtubeAPI.getVideosOnFavoriteClick(request, range)
        dispatch(setVideos(videos.data.items, videos.data.pageInfo.totalResults, request))
    }
}

export default favoriteReducer