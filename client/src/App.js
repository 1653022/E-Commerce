import React, {Component} from 'react';
// import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Nav from './components/Head/Nav';
import routes from './routes';

class App extends Component{
  render(){
    return(
      <Router>
        <div>
            {/* <Nav/> */}
            <main id="mainContainer">
                <div className = "container">
                  
                </div>
            </main>

            <Switch>
              {this.showContent(routes)}
            </Switch>

            {/* <Footer/> */}
        </div>
      </Router>
      
    )
  }

  showContent = routes => {
    let result = null;
    if(routes.length > 0 ){
      result = routes.map((route, index) =>{
        return(
          <Route 
              key = {index}
              path={route.path}
              exact = {route.exact} 
              component ={route.main}/>
        )
      }) 
    }
    return result;
  }
}

export default App;


