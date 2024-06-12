import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import Search from './components/Search';

function App() {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmployee/>}/>
      <Route path='/ViewEmployee' element={<ViewEmployee/>}/>
      <Route path='/Search' element={<Search/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
