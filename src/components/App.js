import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          UP Feedback
        </div>

        <GlobalStyle />
      </Layout>
    );
  }
}

export default App;
