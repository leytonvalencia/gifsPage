import './App.css';
import React from 'react'
import {Route, Link} from 'wouter'
import Home from './pages/Home';
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
    <StaticContext.Provider value={{ name: 'klaus', SuscribeteAlCanal: true}}  >
      <div className="App">
        <section className="App-content">
          <Link to="/">
                  <img className='App-logo' alt="Giffy logo" src="/logo-old.png" />
          </Link>
          <GifsContextProvider>
            <Route 
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route 
              component={Home}
              path="/"
            />
            <Route 
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>



  );
}

export default App;
