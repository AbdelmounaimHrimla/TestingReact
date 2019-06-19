import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './containers/Blog/Blog';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
       
    </div>
  );
}

export default App;
