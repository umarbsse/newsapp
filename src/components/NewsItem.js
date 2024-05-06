import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, descripition, urlToImage, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div>
            <div className="card">
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{source}</span>      
                <img src={urlToImage} className="card-img-top" alt="...." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descripition}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(publishedAt).toGMTString()} </small></p>

                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
