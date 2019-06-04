import React, { Component } from 'react';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
