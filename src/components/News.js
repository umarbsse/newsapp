import React, { useEffect,  useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(false)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)
  //    document.title = `${this.capitilizeFirstLetter(props.category)} - NewsMonkey`;
  const capitilizeFirstLetter = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
  }
  const updateNews = async()=> {
    props.setProgress(10);
    setLoading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setPage(page + 1)
    setLoading(false)
    //this.setState({
    //  articles: parsedData.articles,
    //  totalResults: parsedData.totalResults,
    //  page: this.state.page + 1,
    //  loading: false,
    //});
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
  },[]);


  //const handleNextClick = async () => {
  //  setPage(page + 1)
  //  updateNews();
  //};
  //const handlePrevClick = async () => {
  //  setPage(page - 1)
  //  updateNews();
  //};
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setPage(page + 1)
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top {capitilizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
          
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner />} >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => {
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
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;