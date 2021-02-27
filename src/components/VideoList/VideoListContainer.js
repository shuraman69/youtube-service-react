import React, {useState} from 'react'
import {SearchResultConnect} from "../Search/SearchResult";
import {connect} from "react-redux";
import VideoList from "./VideoList";
import {setVideoId} from "../../store/reducers/searchReducer";
import {useHistory} from "react-router";

const VideoListContainer = ({videos, setVideoId}) => {
    const [isColumn, setIsColumn] = useState(false)
    const history=useHistory();
    const onVideoClick = (videoId) => {
        setVideoId(videoId)
        history.push('/videoDetail')
    }
    return (
        <div>
            <SearchResultConnect isColumn={isColumn} setIsColumn={setIsColumn}/>
            <VideoList onVideoClick={onVideoClick} videosArray={videos} isColumn={isColumn}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        videos: state.search.videos.items
    }
}
const VideoListContainerConnect = connect(mapStateToProps, {setVideoId})(VideoListContainer)
export default VideoListContainerConnect
