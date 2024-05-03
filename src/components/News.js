import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="Title 1" descripition="this is my descrupition 1"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Title 2" descripition="this is my descrupition 2"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Title 3" descripition="this is my descrupition 3"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
