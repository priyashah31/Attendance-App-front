import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft';
import Subject from './Subject';
import Student from './Student';
import Teacher from './Teacher';
import AttendanceTable from './AttendanceTable';
import Datepicker from './Components/Datepicker';
import AttendanceStudent from './AttendaceStudent';

class App extends Component {
  render() {
    return (
      <Router>
         <div>


       <PersistentDrawerLeft />


           {/* <PersistentDrawerLeft /> */}
           {/* <Datepicker /> */}

     
      <Switch>
        <Route exact path="/Student" component={Student} />
        <Route exact path="/Teacher" component={Teacher} />
        <Route exact path="/Subject" component={Subject} />
        <Route exact path="/AttendanceTable" component={AttendanceTable} />
        <Route exact path="/:id" component={AttendanceStudent} />



      </Switch>
      </div>
      </Router>
     
    );
  }
}

export default App;
