import './App.css';
import HomePage from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductsByCate from './Pages/productsbycate/productsByCate';
import Description from './Pages/description/description';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import UserInfo from './Pages/UserInfo/UserInfo';
import Checkout from './Pages/checkout/Checkout';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={Cart} />
            <Route path="/productsByCate/:cateId" component={ProductsByCate} />
            <Route path="/description/:proId" component={Description} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/userinfo" component={UserInfo} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
