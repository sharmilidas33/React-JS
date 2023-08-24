import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class News extends Component {
  articles = [
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "From Dumb Money to Saw X: 10 of the best films to watch in September",
        "description": "From Dumb Money and Saw X to My Big Fat Greek Wedding 3, Nicholas Barber picks the standout films to catch this month.",
        "url": "https://www.bbc.com/culture/article/20230823-from-dumb-money-to-saw-x-10-of-the-best-films-to-watch-in-september",
        "urlToImage": "https://ychef.files.bbci.co.uk/live/624x351/p0g88l28.jpg",
        "publishedAt": "2023-08-23T10:52:20.9616831Z",
        "content": "10. The Inventor\r\nCould The Inventor be this year's answer to Guillermo del Toro's Pinocchio? It's a colourful musical comedy that uses stop-motion animation (with some hand-drawn 2D animation thrown… [+1087 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Rolling Stones tease new album with local newspaper advert",
        "description": "The band appear to announce their latest album with an ad for a fictional glass repair company.",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-66592170",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9BE1/production/_120650993_gettyimages-1171248309.jpg",
        "publishedAt": "2023-08-23T10:22:25.3367775Z",
        "content": "The Rolling Stones appear to have revealed the title of their new album with an advert for a fictional glass repair business in a local newspaper.\r\nThe ad, which appeared in the Hackney Gazette, refe… [+2984 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Chandrayaan-3: India attempts first ever south pole Moon landing",
        "description": "The country's space agency wants to be the first in history to land a craft near the lunar south pole.",
        "url": "http://www.bbc.co.uk/news/live/world-asia-india-66576580",
        "urlToImage": "https://c.ndtvimg.com/2023-08/7a18mec_-chandrayaan-3_625x300_23_August_23.jpg",
        "publishedAt": "2023-08-23T10:22:24.9462496Z",
        "content": "Thanks for joining us for up-to-the-minute coverage of Indias attempt to successfully land a spacecraft on the Moon. \r\nChandrayaan-3 is aiming to create history by landing near the little-explored so… [+680 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Greek fires rage after migrant tragedy near border",
        "description": "The bodies of 18 males were found in a forest in northern Greece where fires have burned for days.",
        "url": "http://www.bbc.co.uk/news/world-europe-66590914",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17671/production/_130875859_27c7b325fd99f0f3c2dd22904656f702a43e3eec0_369_3543_19931000x563.jpg",
        "publishedAt": "2023-08-23T09:52:20.2739871Z",
        "content": "Fires that have claimed 20 lives in Greece are still burning out of control in foothills near Athens and the Evros region near the border with Turkey.\r\nEighteen of those killed are thought to be refu… [+4819 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Drones kill three in Belgorod after Moscow attack - Russia",
        "description": "The alleged attack in the Russian border city came after another drone hit central Moscow.",
        "url": "http://www.bbc.co.uk/news/live/world-66587687",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        "publishedAt": "2023-08-23T07:22:17.9088036Z",
        "content": "Good morning.\r\nRussia says three people have been killed by a Ukrainian drone attack in the Belgorod region - which is close to the border between the two countries. \r\nKyiv has not commented but the … [+739 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "FTX founder Bankman-Fried living on bread and water, lawyer says",
        "description": "A vegan diet requested by Sam Bankman-Fried is not being provided in prison, a judge is told.",
        "url": "http://www.bbc.co.uk/news/business-66589797",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C771/production/_130875015_e3f0bfe13a8a0dfe7fbe959d9e392473c5c1792b.jpg",
        "publishedAt": "2023-08-23T07:07:20.5799373Z",
        "content": "Sam Bankman-Fried, the founder of collapsed cryptocurrency exchange FTX, is \"subsisting on bread and water\" in prison, according to his lawyer.\r\nThe prison he is being held in ahead of his trial has … [+1970 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Republican debate: Rivals seeking political oxygen in a Trump-less showdown",
        "description": "The frontrunner's absence from the TV showdown offers rivals an opening, but also has a big drawback.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66588601",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/499F/production/_130874881_0363b44cac208bdd07ec35e5db94088557f0608c.jpg",
        "publishedAt": "2023-08-23T07:07:19.7207763Z",
        "content": "With one big exception, the leading Republican candidates for the 2024 White House race are gathering on Wednesday in Milwaukee, Wisconsin, for the first party-sanctioned primary debate.\r\nThe metapho… [+7915 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Andrew Tate prosecution files reveal graphic claims of coercion ahead of trial",
        "description": "Romanian prosecutors' files, seen by BBC, allegedly show the influencer coercing women into sex acts.",
        "url": "http://www.bbc.co.uk/news/world-europe-66581218",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1169F/production/_130872317_1-ac24fca0958f21a30feee0ee459a1c9ae8405f8e.jpg",
        "publishedAt": "2023-08-23T05:22:18.205735Z",
        "content": "Details of graphic evidence compiled by Romanian prosecutors, alleging that Andrew Tate coerced women into sexual acts, have been seen by the BBC.\r\nWarning: This article contains language and details… [+10605 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Mar-a-Lago IT manager implicates Trump in classified files case",
        "description": "The Mar-a-Lago employee points the finger at Mr Trump \"in efforts to delete security camera footage\".",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66589807",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/133FF/production/_130874887_gettyimages-1423717043.jpg",
        "publishedAt": "2023-08-23T03:07:19.7988113Z",
        "content": "Former US President Donald Trump has been implicated by one of his employees in a classified documents case, according to a court filing.\r\nYuscil Taveras, an IT director identified as Trump Employee … [+2393 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Georgia Rico case: John Eastman surrenders to authorities",
        "description": "Ex-Trump lawyer John Eastman is one of two accused in the Georgia indictment to surrender on Tuesday.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-66585927",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13CE7/production/_130872118_gettyimages-1236302381.jpg",
        "publishedAt": "2023-08-22T16:52:23.0162807Z",
        "content": "Two people accused of conspiring with ex-President Donald Trump in the state of Georgia have turned themselves in to face charges of election interference.\r\nJohn Eastman, one of 19 co-defendants name… [+3155 chars]"
    }
]
  constructor(){
    super();
    console.log("This is a constructor from News Component");
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-4'>
      <h3>Your Daily Dose of News, Just a Click Away!</h3>
        <h4 className='container my-4'>Top News</h4>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.length>66 ? `${element.description.slice(0,66)}...`:element.title} description={element.description.length >66?`${element.description.slice(0, 66)}...`: element.description} 
            imgUrl={element.urlToImage} 
            newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}
