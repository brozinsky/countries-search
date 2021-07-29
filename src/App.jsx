import React from 'react'
import { AppContext } from './contexts/AppContext'
import { Route, Switch, useLocation } from "react-router-dom"
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

const API = 'https://restcountries.eu/rest/v2/all'

function App() {
  const { setState } = React.useContext(AppContext);
  const location = useLocation();

  React.useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const countriesData = data.filter((country) => country.name.includes('United'))

        setState(prevState => {
          const dataArr = countriesData.map(({ name, currencies, capital }) => {
            const urlName = name.replace(/\s+/g, '-').toLowerCase()
            return { name, id: urlName, currencies, capital }
          });
          return {
            ...prevState,
            countries: dataArr
          }
        })
      })
  }, [])

  return (
    <Switch location={location} key={location.pathname}>
      <Route path="/" exact component={HomePage} />
      <Route path="/:id" exact component={DetailsPage} />
    </Switch>
  );
}

export default App;