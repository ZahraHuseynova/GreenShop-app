import {Route, Router,Switch} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import ProductDetail from"./pages/ProductDetail"
import SearchPage from"./pages/SearchPage";
import CartPage from "./pages/CartPage"
import Header from './Header';
import Footer from './Footer';
import history from "../history";

const App=()=>{
    return(
        <div className="ui container">
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path="/" component={MainPage} exact/>
                    <Route path="/pages/product/:id" component={ProductDetail} exact/>
                    <Route path="/pages/search/:id" component={SearchPage} exact/>
                    <Route path="/pages/cart" component={CartPage} exact/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;