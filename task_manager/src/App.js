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
            <Route index Component={Landing}></Route>
        </Routes>
    </div>
  );
}

export default App;
