import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, descripition} = this.props;
    return (
      <div>
            <div class="card" style= {{width: "18rem"}}>
                <img src="https://cdn.theathletic.com/app/uploads/2024/05/01215907/GettyImages-2150483840-scaled.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{descripition}</p>
                    <a href="/newsitem" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
