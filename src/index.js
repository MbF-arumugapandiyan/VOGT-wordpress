import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './components/app'
import Home from './components/home'
import About from './components/about'
import Movie from './components/movie/index';
import MovieDetail from './components/movie/movie-detail';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const target = document.querySelector('#root')

render( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/movie" component={Movie} />
        <Route path="/movie-detail/:movieId" component={MovieDetail} />
      </App>
    </ConnectedRouter>
  </Provider>,
  target 
)
  