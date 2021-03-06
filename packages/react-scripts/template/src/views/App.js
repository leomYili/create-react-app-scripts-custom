import React from 'react';
import logo from '../logo.svg';
import './App.css';

import { Typography, Spin } from 'antd';

const { Title, Paragraph } = Typography;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title mark={true}>{this.props.title}</Title>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Spin />
          <Paragraph
            editable={{
              onChange: function(str) {
                console.log('Content change:', str);
              },
            }}
            style={{
              color: '#ffffff',
              fontSize: '16',
            }}
          >
            this is apply...
          </Paragraph>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
