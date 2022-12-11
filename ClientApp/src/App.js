import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { FetchData } from './components/FetchData';
import { Test } from './components/Test';
import { Counter } from './components/Counter';
import { ChakraProvider } from '@chakra-ui/react'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <ChakraProvider>
        <Layout>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/test' component={Test} />
        </Layout>
      </ChakraProvider>
    );
  }
}
