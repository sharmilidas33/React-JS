import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize: 9,
    default:"general"
  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
  constructor(){
    super();
    console.log("This is a constructor from News Component");
    this.state={
      articles: [],
      totalArticles: 0,
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("componentDidMount");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31184537eacb40e99125a15e9d86f31b&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalArticles: parsedData.totalResults,
      loading:false});
  }

  handlePreviousClick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31184537eacb40e99125a15e9d86f31b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({loading: true});

    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading: false
    })
  }
  handleNextClick=async()=>{
    if(!(this.state.page+1 > Math.ceil (this.state.totalArticles/this.props.pageSize))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31184537eacb40e99125a15e9d86f31b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});

      let data= await fetch(url);
      let parsedData= await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles,
      loading: false
    })
    }
  }
  render() {
    console.log("render");
    return (
      <div className='container my-4'>
      <h3 className='text-center' id="heading1">Your Daily Dose of News, Just a Click Away!</h3>
        <h4 className='container my-4 text-left' id="heading2">TOP NEWS</h4>
        {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={(!element.title) ?"..."  : (element.title)}
        description={(element.description && element.description.length > 66) ? `${element.description.slice(0, 66)}...` : (element.description || "...")} 
            imgUrl={element.urlToImage} 
            newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container">
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-info" type="button" onClick={this.handlePreviousClick}>&lt;&lt;Previous</button>
          <div className="d-flex justify-content-end">
          <button disabled={this.state.page+1 > Math.ceil (this.state.totalArticles/this.props.pageSize)}className="btn btn-success me-md-2" type="button" onClick={this.handleNextClick}>Next &gt;&gt;</button>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
