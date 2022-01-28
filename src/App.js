import './App.css';
import Sidebar from './components/sidebar'
import avatar from './images/avatar.png'
import Header from './components/header';
import SecondHeader from './components/secondHeader';
import Navbar from './components/navbar';
import { Route,Switch, NavLink, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Course from './components/course';
import Qna from './components/qna';
import Exam from './components/exam';
import News from './components/news';



function App() {
  return (
    <div className='body container-fluid p-0 d-flex'><Router> 
      <div className='side_bar'><Sidebar value={avatar}/></div>
      <div className='main_body'>
      <Header/>
      <SecondHeader value={avatar}/>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route>
        <Route exact path='/course'>
          <Course/>
        </Route>
        <Route exact path='/exam'>
          <Exam/>
        </Route>
        <Route exact path='/qna'>
          <Qna/>
        </Route>
        <Route exact path='/news'>
          <News/>
        </Route>   
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
