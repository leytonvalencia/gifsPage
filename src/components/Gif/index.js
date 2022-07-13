import React from 'react'
import './Gif.css'
function Gif({title, url, id}) {
  return (
    <div className="Gif">
      <a href={`/gif/${id}`} className='Gif-link'>
              <h4> {title}</h4>
              <img alt={title} src={url} />
      </a>
    </div>
  )
}

export default Gif