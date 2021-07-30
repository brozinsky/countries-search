import React from 'react'
import './App.css'
import { AppContext } from './contexts/AppContext'
import { Route, Switch, useLocation } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

const allAPI = 'https://restcountries.eu/rest/v2/all'

function App() {
  const { state, setState } = React.useContext(AppContext);
  const location = useLocation();

  const getNames = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // const countriesData = data.filter((country) => country.name.includes('United'))
        setState(prevState => {
          const dataArr = data.map(({ name }) => {
            const urlName = name.replace(/\s+/g, '-').toLowerCase()
            return { name, id: urlName }
          });
          return {
            ...prevState,
            countryNames: dataArr
          }
        })
      })
  }

  React.useEffect(() => {
    getNames(allAPI)
  }, [])

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