import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';
import FilesList from '../components/FilesList';

const AppRouter = () => (

  <BrowserRouter>

    <div className="container">

      <Header />

      <div className="main-content">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/list" component={FilesList} />
        </Switch>
      </div>

    </div>

  </BrowserRouter>

);

export default AppRouter;