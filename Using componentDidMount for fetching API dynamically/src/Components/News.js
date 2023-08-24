import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class News extends Component {
  constructor(){
    super();
    console.log("This is a constructor from News Component");
    this.state={
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    console.log("componentDidMount");
    let url="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=31184537eacb40e99125a15e9d86f31b";
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    console.log("render");
    return (
      <div className='container my-4'>
      <h3>Your Daily Dose of News, Just a Click Away!</h3>
        <h4 className='container my-4'>Top News</h4>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={(!element.title) ?"..."  : (element.title)}
        description={(element.description && element.description.length > 66) ? `${element.description.slice(0, 66)}...` : (element.description || "...")} 
            imgUrl={element.urlToImage} 
            newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}
