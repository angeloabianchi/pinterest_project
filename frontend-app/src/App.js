import React, {useState, useEffect} from 'react';
import './App.css';
import BoardPin from "./Component/BoardPin/BoardPin";
import PinPage from "./Component/Pin/PinPage";
import User from "./Component/User/User.js";
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
    const [boards, setBoards] = useState(undefined);
    const [users, setUsers] = useState(undefined);

    useEffect(() => {
        Api.getPins().then(res => setPins(res));
    }, [setPins]);

    useEffect(() => {
        Api.getBoards().then(res => setBoards(res));
    }, [setBoards]);

    useEffect(() => {
        Api.getUsers().then(res => setUsers(res));
    }, [setUsers]);


  return (
      <Router>
        <div className="App">
            <div className="Content">
              <Switch>
                  {users && boards && pins && <Route path="/user/id=:userId/board/id=:boardId/pin/id=:pinId" render={props => <PinPage data={pins} {...props} />} />}
                  {users && boards && pins && <Route path="/user/id=:userId/boards" render={props => <User data={boards} {...props} />} />}
                  {users && boards && pins && <Route exact path="/user/id=:userId/board/id=:boardId" render={props => <BoardPin data={pins} {...props} />} />}
                  {users && boards && pins && <Route exact path="/" render={props => <HomePage />} />}
              </Switch>
            </div>
        </div>
    </Router>
  )

}

export default contextWrapper(App);
