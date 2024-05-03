import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
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
        },
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Borys Kit",
          "title": "Emma Stone, Nathan Fielder Reteam with A24 for Ben Mezrich’s Carlsen-Niemann Chess Scandal Story (Exclusive) - Hollywood Reporter",
          "description": "The indie upstart seems to have outwitted streamers and studios to win \"Checkmate\" with a seven-figure deal that left competitors' head-spinning.",
          "url": "http://www.hollywoodreporter.com/movies/movie-news/emma-stone-nathan-fielder-a24-ben-mezrich-magnus-carlsen-hans-niemann-1235888413/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/Emma-Stone-and-Nathan-Fielder-getty-H-2024.jpg?w=1024",
          "publishedAt": "2024-05-02T03:08:27Z",
          "content": "A24, operating on its new mandate to act aggressively in the pursuit of projects, just outplayed the Hollywood studios and streamers in order to pick up Checkmate, a hot feature package centered on a… [+3189 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "By Elizabeth Wolfe, Kathleen Magramo, Dalia Faheid, Antoinette Radford, Emma Tucker, Anna Cooban, Rachel Ramirez, Aditi Sangal, Elise Hammond, Maureen Chowdhury, Lauren Mascarenhas, Chandelis Duster and Tori B. Powell, CNN",
          "title": "Police on campus at Columbia and UCLA as protests disrupt colleges nationwide: Live updates - CNN",
          "description": "Police are cracking down on protests against Israel's bombardment of Gaza at campuses across the US.",
          "url": "https://www.cnn.com/business/live-news/university-protests-gaza-05-01-24/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240501184322-fordham-protest-050124-super-tease.jpg",
          "publishedAt": "2024-05-02T02:47:00Z",
          "content": "Approximately 16 peoplewere arrested Wednesday night after a pro-Palestine protest at the University at Buffalo's North Campus, including students and \"other individuals not affiliated with the Unive… [+2280 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MARTÍN SILVA REY",
          "title": "Mexico: Searchers find a charred pit that may be a clandestine crematorium - The Associated Press",
          "description": "Volunteers have searched on the fringes of Mexico City for what they thought could be a clandestine crematorium. It was the first time in recent memory that anyone claimed to have found such a body disposal site in the capital, but authorities disputed the co…",
          "url": "https://apnews.com/article/mexico-city-clandestine-graves-crematorium-6457eef23c02febfdede81c2efeec494",
          "urlToImage": "https://dims.apnews.com/dims4/default/0a8fdef/2147483647/strip/true/crop/3857x2170+0+201/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F83%2F5c4be86475309064a1cd3c8ee89e%2F0cfcedb6df63411f884b409c44476ce7",
          "publishedAt": "2024-05-02T02:36:00Z",
          "content": "MEXICO CITY (AP) Trailed by search dogs and police, María de Jesús Soria Aguayo and more than a dozen volunteers walked carefully through fields of weeds and dry earth with their eyes fixed on the gr… [+4422 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Michael Scherer, David Ovalle, Tyler Pager, Fenit Nirappil",
          "title": "Democrats hope move to reschedule marijuana will help them in November - The Washington Post",
          "description": "The proposed change has the potential to set up a contrast between Biden and Trump, who has shown little interest in engaging with federal marijuana policy.",
          "url": "https://www.washingtonpost.com/politics/2024/05/01/marijuana-biden-democrats-election/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BLQXKXLT2VNFWZE2YJ6WQHUXXY_size-normalized.JPG&w=1440",
          "publishedAt": "2024-05-02T01:56:00Z",
          "content": "A half-century after high school kids in Californias Marin County started using 4:20 as code for smoking marijuana, political advisers to the 81-year-old teetotaler president, Joe Biden, began signal… [+339 chars]"
        },
        {
          "source": {
            "id": "nfl-news",
            "name": "NFL News"
          },
          "author": null,
          "title": "Bears GM Ryan Poles on taking punter Tory Taylor in fourth round: 'I didn't expect him to get much further' - NFL.com",
          "description": "Speaking Wednesday on the Pat McAfee Show, Chicago Bears general manager Ryan Poles discussed the choice to draft a punter in the fourth round, and the thought behind grabbing Rome Odunze No. 9 overall in last week's draft.",
          "url": "https://www.nfl.com/news/bears-gm-ryan-poles-on-taking-punter-tory-taylor-in-fourth-round-i-didn-t-expect-him-to-get-much-further",
          "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/jlmdryuqetqs0rquctpu",
          "publishedAt": "2024-05-02T01:04:00Z",
          "content": null
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Mike Coppinger",
          "title": "Boxer Ryan Garcia tested positive for banned substance ostarine - ESPN",
          "description": "Boxer Ryan Garcia tested positive for the banned substance ostarine on the day before and the day of his upset win over Devin Haney, per a letter obtained by ESPN.",
          "url": "https://www.espn.com/boxing/story/_/id/40066162/boxer-ryan-garcia-tested-positive-banned-substance-ostarine",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0418%2Fr1320626_1296x729_16%2D9.jpg",
          "publishedAt": "2024-05-02T01:03:00Z",
          "content": "Star boxer Ryan Garcia tested positive for the performance-enhancing substance ostarine the day before and the day of his upset win over Devin Haney last month, per a Voluntary Anti-Doping Associatio… [+4034 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Reuters",
          "title": "Biden blames China, Japan and India's economic woes on 'xenophobia' - CNBC",
          "description": "President Biden said that \"xenophobia\" from China to Japan and India is hobbling their growth, as he argued that migration has been good for the U.S. economy.",
          "url": "https://www.cnbc.com/2024/05/02/biden-blames-china-japan-and-indias-economic-woes-on-xenophobia.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107389749-17108856022024-03-19t213637z_961572244_rc29p6amk99y_rtrmadp_0_usa-election-biden.jpeg?v=1714611202&w=1920&h=1080",
          "publishedAt": "2024-05-02T01:01:00Z",
          "content": "President Joe Biden said on Wednesday that \"xenophobia\" from China to Japan and India is hobbling their growth, as he argued that migration has been good for the U.S. economy.\r\n\"One of the reasons wh… [+1249 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": "POLITICO",
          "title": "'Seize all cannabis': Inside the surprising federal crackdown on New Mexico weed farmers - POLITICO",
          "description": null,
          "url": "https://www.politico.com/news/2024/05/01/federal-crackdown-new-mexico-weed-farmers-00155624",
          "urlToImage": null,
          "publishedAt": "2024-05-02T00:37:06Z",
          "content": null
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Caroline Linton, Elizabeth Campbell",
          "title": "GOP-led Arizona Senate votes to repeal 1864 abortion ban, sending it to Democratic Gov. Katie Hobbs - CBS News",
          "description": "A similar repeal of Arizona's 1864 abortion ban passed the GOP-controlled House last week, and Gov. Katie Hobbs has said she'd sign the measure.",
          "url": "https://www.cbsnews.com/news/arizona-abortion-ban-state-senate-repeal-vote/",
          "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/01/42d826c4-2110-421f-8186-c5c8f64b222c/thumbnail/1200x630/dffc18d012ffb5df507a3bfb30ae49b9/ap24121772804284.jpg?v=1d6c78a71b7b6252b543a329b3a5744d",
          "publishedAt": "2024-05-02T00:09:35Z",
          "content": "Arizona's Republican-controlled Senate on Wednesday voted to repeal a Civil War-era abortion ban, one week after a similar motion passed the GOP-controlled state House. \r\nTwo Republicans, TJ Shopes a… [+2399 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WKOW"
          },
          "author": "Enjoyiana Nururdin, M.A.",
          "title": "Mount Horeb police shoot, kill student with gun outside middle school - WKOW",
          "description": "Reunification of Intermediate students will begin at the District Bus Garage. Kindergarten, first, and second-grade students are being released starting at 5 p.m. Parents with children in Wrap Care at",
          "url": "https://www.wkow.com/news/top-stories/mount-horeb-police-shoot-kill-student-with-gun-outside-middle-school/article_03491270-07d9-11ef-920c-c365bb828a13.html",
          "urlToImage": "https://bloximages.newyork1.vip.townnews.com/wkow.com/content/tncms/assets/v3/editorial/1/4b/14b6860e-07ee-11ef-8ab4-7709d54c918f/6632932963739.image.png?crop=800%2C420%2C0%2C14&resize=800%2C420&order=crop%2Cresize",
          "publishedAt": "2024-05-02T00:00:00Z",
          "content": "Caroline Dade provides the latest as law enforcement continued its investigation Wednesday.\r\nMOUNT HOREB, Wis. (WKOW) -- Wisconsin Attorney General Josh Kaul announced Wednesday evening an active sho… [+5760 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "OilPrice.com"
          },
          "author": "Alex Kimani",
          "title": "The Next Two Months Will Be Critical For Oil Fundamentals | OilPrice.com - OilPrice.com",
          "description": "We're entering a key period for oil fundamentals that will determine whether the market will tighten further or disappoint.",
          "url": "https://oilprice.com/Energy/Crude-Oil/The-Next-Two-Months-Will-Be-Critical-For-Oil-Fundamentals.html",
          "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-05-01_ljoiq26dxm.jpg",
          "publishedAt": "2024-05-02T00:00:00Z",
          "content": "A new study reveals that…\r\nGlobal oil demand growth is…\r\nCanada faces an escalating threat…\r\nBy Alex Kimani - May 01, 2024, 7:00 PM CDT\r\nEnergy markets have kicked off the new month on the back foot,… [+4326 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Reuters",
          "title": "S&P 500, Nasdaq end lower after Fed rate decision, Powell press conference - Reuters",
          "description": null,
          "url": "https://www.reuters.com/markets/us/futures-fall-chip-stocks-drag-fed-rate-decision-awaited-2024-05-01/",
          "urlToImage": null,
          "publishedAt": "2024-05-01T23:36:00Z",
          "content": null
        }]
    constructor(){
        super();
        console.log("HEllo is a consrtructo from news components ");
        this.state = {
            articles: this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title="Title 1" descripition="this is my descrupition 1" imageUrl="https://cdn.theathletic.com/app/uploads/2024/05/01215907/GettyImages-2150483840-scaled.jpg"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Title 2" descripition="this is my descrupition 2" newsUrl="To DO" />
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
