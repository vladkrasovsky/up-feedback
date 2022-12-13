import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        UP Feedback
        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
