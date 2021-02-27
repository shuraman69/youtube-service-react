import React from 'react'

const divStyle = {
    width: '800px',
    margin: "0 auto"
}
const iFrameStyle = {
    width: "600px",
    height: '300px',
    margin: '0 auto'
}
const VideoDetail = ({videoId}) => {
    return (
        <div style={divStyle}>
            <iframe style={iFrameStyle} src={`https://www.youtube.com/embed/${videoId}`} frameborder="0"/>
        </div>
    )
}
export default VideoDetail