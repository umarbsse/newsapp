import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitilizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
  capitilizeFirstLetter = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
  }
  async updateNews() {
    //console.log("update news called")
    this.props.setProgress(10);
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    //console.log(this.state.articles.length)
    //console.log(this.state.totalResults)
    //console.log(url)
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handleNextClick = async () => {
    //console.log("next button called");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    //console.log("handlePrevClick");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    //console.log(this.state.articles.length)
    //console.log(this.state.totalResults)
    //console.log(url)
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });

  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {this.capitilizeFirstLetter(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
          
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />} >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    source={element.source.name}
                    publishedAt={element.publishedAt ? element.publishedAt : ""}
                    author={element.author ? element.author : "Unknown"}
                    descripition={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    urlToImage={
                      !element.urlToImage
                        ? "https://assets.v3.snowfirehub.com/images/120888/499_o_.he-best-image-format-for-the-web-3-quick-SEO-tips-"
                        : element.urlToImage
                    }
                  />
                </div>
              );
              })}    
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
