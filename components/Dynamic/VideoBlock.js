import React from 'react';
import ReactMarkdown from 'react-markdown';

const VideoBlock = (props) => {

  let videos = props.videos.video.map((video, idx) => (
    <a href={`http://localhost:1337${video.url}`} key={`video-${idx}`}>
      {video.name}
    </a>
  ))

  return (
    <div className="video-section component-paddings">
        <div className="videos-block">
          <span className="section-title">{props.videos.name}</span>
          <ReactMarkdown escapeHtml={false} children={props.videos.content} className="markdown"/>
          <div className="videos">
            {videos}
          </div>
        </div>
    </div>
  )
}
export default VideoBlock;
