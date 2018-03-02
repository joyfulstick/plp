import React, { Component } from 'react'
import ListingPage from './components/ListingPage/ListingPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Product Listing Page</h1>
          <div className="App__logo" />
        </header>
        <main className="App__listing" >
          <ListingPage />
        </main>
      </div>
    )
  }
}

export default App
