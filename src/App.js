import React from 'react'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'

export default function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className={'container pt-4'}>
        <Home/>
      </div>
    </React.Fragment>
  )
}