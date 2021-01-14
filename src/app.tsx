import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store/configureStore';
import { Container } from './components/vehicle/container';
import { Detail } from './components/vehicle/detail';
import { Detail as ClientDetail } from './components/client/detail';
import { Navbar } from './components/layout/navbar';
import { Contact } from './components/contact';
import { About } from './components/about';
import { Clients } from './components/client/clients';
import { Create } from './components/client/create';

export const App = () => (
    <Provider store={store}>
      <BrowserRouter basename="reduxapp">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Container} />          
          <Route path="/detail/:id" component={Detail} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/clients" component={Clients} />
          <Route path="/client-detail/:id" component={ClientDetail} />
          <Route path="/client-create" component={Create} />
        </Switch>
    </BrowserRouter>
    </Provider>
  );
  