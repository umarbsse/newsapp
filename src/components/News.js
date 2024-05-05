import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
      country:'us',
      pageSize: 8,
      category: 'general'
    };
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    };
    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
        loading:false})
    }
    handleNextClick =async ()=>{
      if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData =await data.json()
        this.setState({
          articles: parsedData.articles,
          page: this.state.page+1,
          loading:false
        })
      }
    }
    handlePrevClick =async ()=>{
      //console.log("handlePrevClick");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData =await data.json()
      this.setState({
        articles: parsedData.articles,
        page: this.state.page-1,
        loading:false
      })
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"35px 0px"}}>NewsMonkey - Top Headline</h1>
        {this.state.loading &&  <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element, index)=>{
              return   <div className="col-md-4" key={index} >
                <NewsItem title={element.title?element.title.slice(0,45):""} source={element.source.name}  publishedAt={element.publishedAt?element.publishedAt:""}  author={element.author?element.author:"Unknown"} descripition={element.description?element.description.slice(0,88):""}  newsUrl={element.url} urlToImage={!element.urlToImage?"https://assets.v3.snowfirehub.com/images/120888/499_o_.he-best-image-format-for-the-web-3-quick-SEO-tips-":element.urlToImage}/>
                </div>
            })}    
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
