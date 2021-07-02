import SideNavigation from "./components/sideNav";
import Header from "./components/header";
import Home from './pages/home';
import Movies from './pages/movie/movies';
import Admin from "./pages/admin";
import Movie from "./pages/movie/oneMovie";
import CategoryHome from './pages/categories/categoryHome';
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryPage from "./pages/categories/categoryPage";

const App = (props) => {

  const [page, setPage] = useState('Home');

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-2 col-xs">
          <SideNavigation />
        </div>
        <div className="col">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route
              path="/movies/:id"
              render={(props) => <Movie {...props} />}
            />
            <Route exact path="/by-category">
              <CategoryHome />
            </Route>
            <Route
              exact
              path="/by-category/:category"
              render={(props) => <CategoryPage {...props} /> }
            />
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
