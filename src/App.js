/* eslint-disable no-unused-expressions */
import React, {Component, Suspense} from 'react';
import './App.css';
import Page1 from './components/page1';

const Page2Lazy = React.lazy(() => import('./components/page2'));
const Page3Lazy = React.lazy(() => import('./components/page3'));
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
          return (
              <Suspense fallback={<div>Loading...</div>}>
                <Page2Lazy onRouteChange={this.onRouteChange}/>
              </Suspense>
            );
      case 'page3':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3Lazy onRouteChange={this.onRouteChange}/>
          </Suspense>
        );
      default:
        return(<h1>Page Not Found</h1>)
      
    }
  }
}

export default App;
