import React from 'react';

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
          DELETE
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
