import React from 'react'

const YoutubeEmbed = ({ embedId, autoplay }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay ? 1 : 0}`}
      style={{ border: 0 }}
      allow="autoplay"
      title="video"
      allowFullScreen={true}
    />
  </div>
);

export default YoutubeEmbed
