import React, {Fragment, useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../context/github/githubContext'

export const Home = () => {
  const {loading, users} = useContext(GithubContext)

  return (
    <Fragment>
      <Search/>

      <br/>

      <div className="row">
        {loading
          ? <p className={'text-center'}>Загрузка...</p>
          : users.map(user => (
            <div key={user.id} className="col-sm-4 mb-4">
              <Card user={user}/>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}