import {connect} from "react-redux";
import React, {useState} from 'react'
import FavoriteRequestsList from "./FavoriteList";
import {editFavoriteRequest, getVideosOnFavoriteRequest} from "../../store/reducers/favoriteReducer";
import {useHistory} from "react-router";
import ModalComponent from "../Modal/Modal";


const FavoriteContainer = ({
                               favoriteRequests,
                               getVideosOnFavoriteRequest,
                               editFavoriteRequest,
                               setSubmitId,
                               submitId
                           }) => {
    const history = useHistory();
    const [visible, setVisible] = useState(false)
    const [newRequest, setNewRequest] = useState("")
    const [newRequestName, setNewRequestName] = useState("")
    const [newRange, setNewRange] = useState(12)
    const [favId, setFavId] = useState(null)
    const onEditSubmit = (event) => {
        event.preventDefault()
        editFavoriteRequest(favId, newRequest, newRequestName, newRange)
        setVisible(false)
    }
    const onEditClick = (id) => {
        setFavId(id)
        setSubmitId(1)
        setVisible(true)
    }
    const onFavoriteClick = (id) => {
        favoriteRequests.forEach(req => {
            if (req.id === id) {
                getVideosOnFavoriteRequest(req.request, req.range)
                history.push('/search')
            }
        })
    }
    return (
        <div>
            <FavoriteRequestsList setVisible={setVisible} onEditClick={onEditClick} onFavoriteClick={onFavoriteClick}
                                  favoriteRequests={favoriteRequests}/>
            <ModalComponent request={newRequest} requestName={newRequestName}
                            range={newRange} setRequest={setNewRequest}
                            setRequestName={setNewRequestName} setRange={setNewRange}
                            setVisible={setVisible} visible={visible}
                            onEditSubmit={onEditSubmit} submitId={submitId}
            />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        favoriteRequests: state.favorite.favoriteRequests
    }
}
const FavoriteContainerConnect = connect(mapStateToProps, {
    getVideosOnFavoriteRequest,
    editFavoriteRequest
})(FavoriteContainer)
export default FavoriteContainerConnect