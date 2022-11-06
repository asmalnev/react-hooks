import React from 'react'
import {Link} from 'react-router-dom'

export const Card = () => (
  <div className="card">
    <img src="" alt="" className="card-img-top"/>
    <div className="card-body">
      <div className="card-title">React JS</div>
      <Link to={'/profile/'} className="btn btn-primary">Открыть</Link>
    </div>
  </div>
)