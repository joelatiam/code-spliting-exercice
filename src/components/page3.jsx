import React from 'react';
import logo from '../logo.svg';

export default function Page3({onRouteChange}){
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick = {() => onRouteChange('page1')}>Page 1</button>
        <button onClick = {() => onRouteChange('page2')}>Page 2</button>
      </div>
    )
}
