import React from 'react'

import './Video.scss'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      title="video"
      allowFullScreen={true}
    />
  </div>
);

export default YoutubeEmbed
