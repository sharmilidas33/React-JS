import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description,imgUrl,newsUrl}= this.props;
    const defaultImageUrl="https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=";
    const imageSource=  imgUrl && imgUrl.match(/\.(jpeg|jpg|gif|png)$/)?imgUrl: defaultImageUrl;
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={imageSource} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning">Find Out More</a>
            </div>
        </div>
      </div>
    )
  }
}
