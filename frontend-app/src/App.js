import React, {useState, useEffect} from 'react';
import './App.css';
import BoardPin from "./Component/BoardPin/BoardPin";
import PinPage from "./Component/Pin/PinPage";
import NavBar from "./Component/NavBar/NavBar.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


const App = () => {
    const [pins, setPins] = useState();
    const apiHostName = 'http://localhost:5000';

    useEffect(() => {
        fetch(`${apiHostName}/pins`)
            .then(response => response.json())
            .then(pinsFromResponse => {
                 setPins(pinsFromResponse);
            });
    }, []);


  return (
    <Router>
        <div className="App">
            <div className="content">
              <NavBar />
              <Switch>
                  {pins && <Route path="/pin/id=:params" render={props => <PinPage data={pins} {...props} />} />}
                  {pins && <Route path="/" render={props => <BoardPin data={pins} {...props} />} />}
              </Switch>
            </div>
        </div>
    </Router>
  )

}

export default App;
