import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import CalendarEvent from './Components/CalendarEvent/calendarEvent';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path="/" Component={Landing}></Route>
            <Route path="/event" Component={CalendarEvent}></Route>
        </Routes>
    </div>
  );
}

export default App;
