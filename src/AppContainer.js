import App from "./App";
import {connect, useDispatch} from "react-redux";
import {useEffect} from "react";
import {loginAC, logoutThunk} from "./store/reducers/loginReducer";
import {setFavoriteFromLocalStorage} from "./store/reducers/favoriteReducer";

const AppContainer = ({userLogin, loginAC, totalResult, logoutThunk, setFavoriteFromLocalStorage, videoId}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        //собираю пользователя, чтобы при обновлении страницы он не вылетал с сервиса
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"))
            let login = user.login
            let password = user.password
            let userToken = user.token
            //AC=ActionCreator, логину заново , при обновлении
            dispatch(loginAC(login, password, userToken))
            //собираю сохраненные запросы этого пользователя, если они есть
            const favoriteRequests = JSON.parse(localStorage.getItem(login))
            if (favoriteRequests !== null) {
                dispatch(setFavoriteFromLocalStorage(favoriteRequests))
            } else {
                dispatch(setFavoriteFromLocalStorage([]))
            }
        }
    }, [])

    return <App totalResult={totalResult} login={userLogin} logout={logoutThunk} videoId={videoId}/>
}

const mapStateToProps = (state) => {
    return {
        userLogin: state.login.user.login,
        totalResult: state.search.videos.totalResult,
        videoId: state.search.videoId
    }
}
const AppContainerConnect = connect(mapStateToProps, {
    logoutThunk,
    setFavoriteFromLocalStorage,
    loginAC
})(AppContainer)
export default AppContainerConnect