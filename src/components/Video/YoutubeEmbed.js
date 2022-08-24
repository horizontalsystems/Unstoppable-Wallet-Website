import React from 'react'

import './Video.scss'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="autoplay"
      title="video"
      allowFullScreen={true}
    />
  </div>
);

export default YoutubeEmbed
