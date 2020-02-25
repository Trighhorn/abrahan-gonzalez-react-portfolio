import React from 'react';
import { Link } from 'react-router-dom'

export default function portfolioItem(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>

      <Link to={`/portfolio/${props.slug}`}>Link</Link>
    </div>
  )
}

