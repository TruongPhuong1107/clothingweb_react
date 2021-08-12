import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <header>
         <div className="container-group">
             <div className="box-actions-left">
                <div className="justify">
                  <button className="fas fa-align-justify" value="dropdown" id="justify"></button>
                  <div className="dropdown-content" id="dropdown">
                  </div>
                </div>
                <div className="home">
                  <Link to = '/home'><a>HOME</a></Link>
                </div>  
             </div>
             <div className="box-title">
              <a>LYS</a>
             </div>
             <div className="box-actions-right">
                <span>
                  <div className="search-box">
                    <input id="search" className="search" type="text"/>
                    <i id="arrow-right" className="fas fa-arrow-right"></i>
                  </div>
                  <span className="login-check" id="login-check"></span>
                  <a id="icon-search">
                    <i id="icon-search" className="fas fa-search"></i>
                  </a>
                  <Link to='/cart'><a className="cart">CART</a></Link>
                </span>            
              </div>              
         </div>
      </header>
      <Switch>
        <Route  path ='/home' component={HomePage} />
        <Route  path ='/cart' component={Cart} />
      </Switch>
      <footer>
        <div className="footer">
          <p className="copy-right">&copy;Bản quyền thuộc về <b>  LYS </b> </p>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
