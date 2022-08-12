import React from 'react';
import './gallery.css';


const GalleryThumbnail = ({src, header, content}) => {
  return (
    <div className='gallery-thumbnail'>
<img src={src} alt='album-art'/>
<p>
    <span>{header}</span>
    <span>{content}</span>
</p>
    </div>
  )
}

export default GalleryThumbnail