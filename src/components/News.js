import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
      //console.log(this.state.page);
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1&pageSize=20`;
      //console.log(url);
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
    handleNextClick =async ()=>{
      if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

      }else{

        //console.log(this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page+1}&pageSize=20`;
        console.log(url);
        let data = await fetch(url);
        let parsedData =await data.json()
        this.setState({
          articles: parsedData.articles,
          page: this.state.page+1
        })
      }
    }
    handlePrevClick =async ()=>{
      //console.log("handlePrevClick");
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page-1}&pageSize=20`;
      //console.log(url);
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({
        articles: parsedData.articles,
        page: this.state.page-1
      })
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            {this.state.articles.map((element, index)=>{
              return   <div className="col-md-4" key={index} >
                <NewsItem title={element.title?element.title.slice(0,45):""} descripition={element.description?element.description.slice(0,88):""}  newsUrl={element.url} urlToImage={!element.urlToImage?"https://assets.v3.snowfirehub.com/images/120888/499_o_.he-best-image-format-for-the-web-3-quick-SEO-tips-":element.urlToImage}/>
                </div>
            })}    
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
