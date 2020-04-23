import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Student from './Components/Student';
import Redirect from './Components/Redirect';
import customHistory from './Components/History';


// const NewRoute = () => {
//   return (
//     <div>
//       <p>New Route</p>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//   <div>
//     <p>Home</p>
// </div>
//  );
// };

class App extends React.Component {
  render() {
    return(
   <BrowserRouter history = {customHistory}>
    <Navigation>
    </Navigation>

       <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Redirect} /> 
          <Route component={Error} />
        </Switch>
        
    </BrowserRouter>
    
    ); 
  }}   

export default App;
