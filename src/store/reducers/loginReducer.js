import users from "../users";
import generateToken from "../../helpers/generateToken";
import {setFavoriteFromLocalStorage} from "./favoriteReducer";

const LOGIN = "LOGIN"
const LOG_OUT = "LOG_OUT"

const USERS = users;
const initialState = {
    user: {
        login: null,
        password: null,
        token: null
    }
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {login: action.login, password: action.password, token: action.token}
            }
        case LOG_OUT:
            return {
                ...state,
                user: {login: null, password: null, token: null}
            }
        default:
            return state
    }
}

export const loginAC = (login, password, token) => ({type: LOGIN, login, password, token})
const logoutAC = () => ({type: LOG_OUT})

export const loginThunk = (login, password) => {
    return (dispatch, getState) => {
        //поиск нужного пользователя в users.js
        USERS.forEach(u => {
            if (u.login === login && u.password === password) {
                let token = generateToken()
                dispatch(loginAC(login, password, token))
                const user = getState().login.user
                //сохраняю юзера в стораж, чтобы использовать useEffect в appContainer
                localStorage.setItem("user", JSON.stringify(user))
                alert("Вы вошли!")
            }
        })
        //собираю сохраненные запросы из стоража , если они есть
        let favoriteRequests = JSON.parse(localStorage.getItem(login));
        if (favoriteRequests !== null) {
            dispatch(setFavoriteFromLocalStorage(favoriteRequests))
        } else {
            dispatch(setFavoriteFromLocalStorage([]))
        }
    }
}
export const logoutThunk = () => {
    return (dispatch, getState) => {
        const favoriteRequests = getState().favorite.favoriteRequests
        localStorage.removeItem('user')
        //сохраняю в стораж запросы конкретного пользователя
        if (favoriteRequests && favoriteRequests.length > 0) {
            localStorage.setItem(getState().login.user.login, JSON.stringify(getState().favorite.favoriteRequests))
        }
        dispatch(logoutAC())
    }
}

export default loginReducer