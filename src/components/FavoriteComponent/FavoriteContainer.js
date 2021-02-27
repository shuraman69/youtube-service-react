import {connect} from "react-redux";
import React from 'react'
import FavoriteRequestsList from "./FavoriteList";
import {getVideosOnFavoriteRequest} from "../../store/reducers/favoriteReducer";
import {useHistory} from "react-router";


const FavoriteContainer = ({favoriteRequests, getVideosOnFavoriteRequest}) => {
    const history = useHistory();
    const onFavoriteClick = (id) => {
        favoriteRequests.forEach(req => {
            if (req.id === id) {
                getVideosOnFavoriteRequest(req.request, req.range)
                history.push('/search')
            }
        })
    }
    return <FavoriteRequestsList onFavoriteClick={onFavoriteClick} favoriteRequests={favoriteRequests}/>
}
const mapStateToProps = (state) => {
    return {
        favoriteRequests: state.favorite.favoriteRequests
    }
}
const FavoriteContainerConnect = connect(mapStateToProps, {getVideosOnFavoriteRequest})(FavoriteContainer)
export default FavoriteContainerConnect