import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './Category';
import Meal from './Meal';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar> </Navbar>
    <Routes>
      <Route index={true} element={<Category></Category>}></Route>
      <Route path="/:id" element={<Meal/>}/>
    </Routes>
      
    </BrowserRouter>

    </>
  );
}

export default App;
