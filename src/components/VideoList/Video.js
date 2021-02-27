import React from 'react'
import styles from './Video.module.css'

const Video = ({video, isColumn, onVideoClick}) => {
    const imgUrl = video.snippet.thumbnails.medium.url
    const imgAlt = video.snippet.description
    const videoDescription = video.snippet.description
    const videoTitle = video.snippet.title
    const videoID = video.id.videoId
    return (
        <div onClick={() => onVideoClick(videoID)} className={isColumn ? styles.item_list : styles.item_grid}>
            <div className={styles.img_list}><img src={imgUrl} alt={imgAlt}/></div>
            <div className={isColumn ? styles.text_list : styles.text_grid}>
                <div>{videoTitle}</div>
                <p>{videoDescription}</p>
            </div>
        </div>
    )
}
export default Video