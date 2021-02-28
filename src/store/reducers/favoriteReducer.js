import {setVideos} from "./searchReducer";
import {youtubeAPI} from "../../api/api";

const SET_FAVORITE = 'SET_VIDEOS'
const SET_FAVORITE_FROM_LOCAL_STORAGE = 'SET_FAVORITE_FROM_LOCAL_STORAGE'
const EDIT_FAVORITE_REQUEST = 'EDIT_FAVORITE_REQUEST'
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
        case EDIT_FAVORITE_REQUEST:
            return {
                ...state,
                favoriteRequests: state.favoriteRequests.map(rqst => {
                    if (rqst.id == action.id) {
                        return {
                            ...rqst,
                            request: action.newRequest,
                            requestName: action.newRequestName,
                            range: action.newRange,
                        }
                    }
                })
            }
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
//редактирование запроса в favoriteList
const editFavoriteRequestAC = (id, newRequest, newRequestName, newRange) =>
    ({type: EDIT_FAVORITE_REQUEST, id, newRequest, newRequestName, newRange})
export const editFavoriteRequest = (id, newRequest, newRequestName, newRange) => {
    return (dispatch) => {
        dispatch(editFavoriteRequestAC(id, newRequest, newRequestName, newRange))
    }
}

export default favoriteReducer