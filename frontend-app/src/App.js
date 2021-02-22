import React, {useState, useEffect} from 'react';
import './App.css';
import BoardPin from "./Component/BoardPin/BoardPin";
import PinPage from "./Component/Pin/PinPage";
import NavBar from "./Component/NavBar/NavBar.js";
import User from "./Component/User/User.js";
import CreatePin from "./Component/CreatePin/CreatePin";
import Api from "./api";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { contextWrapper } from "./Context";
import HomePage from "./Component/HomePage/HomePage";



const App = () => {
    const [pins, setPins] = useState(undefined);

    useEffect(() => {
        Api.getPins().then(res => setPins(res));
    }, [setPins]);


  return (
      <Router>
        <div className="App">
            <div className="Content">
              <NavBar />


              <Switch>
                  {pins && <Route path="/pin/id=:params" render={props => <PinPage data={pins} {...props} />} />}
                  {pins && <Route path="/user/id=:userId" render={props => <User {...props} />} />}
                  {pins && <Route exact path="/pins" render={props => <BoardPin data={pins} {...props} />} />}
                  {pins && <Route exact path="/" render={props => <HomePage />} />}
              </Switch>
            </div>
        </div>
    </Router>
  )

}

export default contextWrapper(App);
