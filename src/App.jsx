import './App.css';
import HomePage from './components/pages/HomePage';
import TeamPage from "./components/pages/TeamPage";
import SchedulePage from "./components/pages/SchedulePage"
import ClassesPage from "./components/pages/ClassesPage";
import PricingPage from './components/pages/PricingPage';
import ContactPage from './components/pages/ContactPage';
import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/team' element={<TeamPage />}></Route>
          <Route path='/schedule' element={<SchedulePage />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/classes' element={<ClassesPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
