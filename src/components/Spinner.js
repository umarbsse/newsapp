import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img style={{width:'130px',height:'auto'}} className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
}