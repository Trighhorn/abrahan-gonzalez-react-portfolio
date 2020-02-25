import React from 'react';
import { Link } from 'react-router-dom'

export default function portfolioItem(props) {

  const { id, description, thumb_image_url, logo } = props.item
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}}`}>Link</Link>
    </div>
  )
}

    // Datat ill need:
    // bg img: thumb_image_url
    // logo
    // desc: description
    // id: id 