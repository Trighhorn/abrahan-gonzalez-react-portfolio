import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map(portfolioItem => {
    return ( 
      <div className="portfoli-item-thumb" key={portfolioItem.id}>
        <div className="portfoli-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>
        <h1 className="title">{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
        <a onClick={() => props.handleDeleteClick(portfolioItem)}>
          <FontAwesomeIcon icon="trash" />
        </a>
      </div>
    )
  })
  return (
    <div className="portfolio-sidebar-list-wrapper">
      {portfolioList}
    </div>
  )
}

export default PortfolioSidebarList
