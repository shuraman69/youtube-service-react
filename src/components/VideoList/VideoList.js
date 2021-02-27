import React from 'react'
import styles from './Video.module.css'
import Video from "./Video";

const VideoList = ({videosArray, isColumn,onVideoClick}) => {
    return (
        <div className={isColumn ? styles.video_container_list : styles.video_container_grid}>
            {videosArray.length ? videosArray.map((video, index) => <Video onVideoClick={onVideoClick} key={index} isColumn={isColumn}
                                                                           video={video} />) : "Введите ваш запрос"}
        </div>
    )
}
export default VideoList