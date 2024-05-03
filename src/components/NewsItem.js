import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, descripition, urlToImage, newsUrl} = this.props;
    return (
      <div>
            <div className="card" style= {{width: "18rem"}}>
                <img src={urlToImage} className="card-img-top" alt="...." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{descripition}...</p>
                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
