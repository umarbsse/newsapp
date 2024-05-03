import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
        "source": {
          "id": null,
          "name": "The Athletic"
        },
        "author": "The Athletic Staff",
        "title": "Wednesday’s NBA playoffs takeaways: Celtics stomp Heat to advance, Mavericks coast past Clippers - The Athletic",
        "description": "Boston will play the winner of the series between the Orlando Magic and the Cleveland Cavaliers",
        "url": "https://theathletic.com/5465658/2024/05/01/nba-playoffs-scores-takeaways-celtics-heat-clippers-mavericks/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/05/01215907/GettyImages-2150483840-scaled.jpg",
        "publishedAt": "2024-05-02T04:24:15Z",
        "content": "By Jared Weiss, Jay King, Will Guillory, Law Murray and Tim Cato\r\nThe Dallas Mavericks coasted to a dominant 123-93 victory over the LA Clippers to move within one win away from a first-round series … [+8328 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Stephen Collinson",
        "title": "Trump gives his strongman’s ambitions free rein on a day off from court - CNN",
        "description": "Donald Trump used his day off from a criminal trial related to a past election to cast a dark, familiar shadow over the next one.",
        "url": "https://www.cnn.com/2024/05/01/politics/trump-strongman-ambitions-analysis/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2150483837.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-05-02T04:00:00Z",
        "content": "Donald Trump used his day off from a criminal trial related to a past election to cast a dark, familiar shadow over the next one.\r\nThe presumptive GOP nominee declined to say if hed accept the result… [+10318 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CNBC"
        },
        "author": "Sheila Chiang",
        "title": "Microsoft to open new data center in Thailand as it doubles down on AI and Southeast Asia - CNBC",
        "description": "The U.S. tech giant said it will also commit toward AI skills training for over 100,000 Thais and support local developers.",
        "url": "https://www.cnbc.com/2024/05/02/microsoft-to-open-data-center-in-thailand-amid-southeast-asia-expansion.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107409221-1714617427581-gettyimages-2150491849-SatyaNadella-11JPG.jpeg?v=1714617586&w=1920&h=1080",
        "publishedAt": "2024-05-02T03:55:00Z",
        "content": "Microsoft chairman and CEO Satya Nadella on Wednesday announced \"significant commitments\" to build a new regional data center in Thailand, among other initiatives, as the U.S. tech giant doubles down… [+1696 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "JAKE OFFENHARTZ, KRYSTA FAURIA, JOSEPH B. FREDERICK, ETHAN SWOPE",
        "title": "Tensions grips UCLA after police order protestors to disperse or face arrest - The Associated Press",
        "description": "Tensions are growing on the UCLA campus as law enforcement officers order a large group of pro-Palestinian demonstrators to disperse. The heavy police presence comes as administrators and campus police are facing intense criticism for failing to act quickly t…",
        "url": "https://apnews.com/article/israel-palestinian-campus-student-protests-war-c6e5549532c85f13493daa22d0d143ac",
        "urlToImage": "https://dims.apnews.com/dims4/default/045dbfb/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2c%2F49%2Fcfee0992061cc0a35b4b03a7a159%2F514b5f7be86b4a0f9b25fc26ed42b607",
        "publishedAt": "2024-05-02T03:39:00Z",
        "content": "LOS ANGELES (AP) Law enforcement on the UCLA campus donned riot gear Wednesday evening as they ordered the dispersal of over a thousand people who had gathered in support of a pro-Palestinian student… [+7713 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Jacqueline Howard",
        "title": "Task force updates guidance for breast cancer screenings for women 40 and older - CNN",
        "description": "Women are now advised to get a mammogram every other year starting at age 40 and until age 74, according to new recommendations from the US Preventive Services Task Force.",
        "url": "https://www.cnn.com/2024/04/30/health/breast-cancer-mammograms-earlier-recommendations/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2041112079.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-05-02T03:13:00Z",
        "content": "Women are now advised to get a mammogram every other year starting at age 40 and until age 74, according to new recommendations from the US Preventive Services Task Force.\r\nThe USPSTF, a volunteer pa… [+12284 chars]"
      },]
    constructor(){
        super();
        console.log("constructor called");
        this.state = {
            articles: this.articles,
            loading:false
        }
    }
    async componentDidMount(){
      //console.log("constructor called");
      console.log("componentDidMount")
      /*let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=4716a90912154398a14326ee246e9f71';
      let data = await fetch(url);
      let parsedData =await data.json()
      //console.log(parsedData)
      this.setState({articles: parsedData.articles})
      */
    }
  render() {
    //console.log("render")
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            {this.state.articles.map((element, index)=>{
              return   <div className="col-md-4" key={index} >
                <NewsItem title={element.title.slice(0,45)} descripition={element.description.slice(0,88)}  newsUrl={element.url} urlToImage={element.urlToImage}/>
                </div>
            })}    
        </div>
      </div>
    )
  }
}

export default News
