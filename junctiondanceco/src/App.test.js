import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Container from "../Grid/Container";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
