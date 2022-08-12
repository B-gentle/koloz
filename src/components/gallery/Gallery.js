import React from 'react';
import Hr from '../hr/Hr';
import './gallery.css';
import { gallery } from '../../data/db';
import GalleryThumbnail from './GalleryThumbnail';
import Button from '../button/Button';

const Gallery = () => {
  return (
    <section className='gallery'>
       <span>Gallery</span>
       <span>An Array Of What We've Done</span>
       <span><Hr /></span>
       <span>
           {gallery && gallery.map((pic, id)=><span key={id}><GalleryThumbnail src={pic.src} header={pic.h1} content={pic.h2} /></span>)}
       </span>
       <span className='gallery-button'><Button content='see more'/></span>
    </section>
  )
}

export default Gallery