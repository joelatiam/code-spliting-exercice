/* eslint-disable no-unused-expressions */
import React, {Component} from 'react';
import './App.css';
import Page1 from './components/page1';
import AsyncComponent from './components/AsyncComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'page1',
      component: '',
    }
  }

  onRouteChange = async (route) =>{
    this.setState({route});
  };

  render(){
    const {route} = this.state;
    switch(route) {
      case 'page1':
        return (<Page1 onRouteChange={this.onRouteChange}/>);
      case 'page2':
          const AsyncPage2 = AsyncComponent(() => import('./components/page2'))
          return (<AsyncPage2 onRouteChange={this.onRouteChange}/>);
      case 'page3':
        const AsyncPage3 = AsyncComponent(() => import('./components/page3'))
        return (<AsyncPage3 onRouteChange={this.onRouteChange}/>);    
      default:
        return(<h1>Page Not Found</h1>)
      
    }
  }
}

export default App;
