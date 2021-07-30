import React from 'react'
import './App.css'
import { Route, Switch, useLocation } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {
  const location = useLocation();

  return (
    <div className="wrapper">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" exact component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;