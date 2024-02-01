
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';

function App() {
  return (
    <>
    
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/addProduct' element={<AddProduct/>}> </Route>
      <Route path='/editProduct/:id' element={<EditProduct/>}> </Route>
    </Routes>
    </>
    );
}

export default App;
