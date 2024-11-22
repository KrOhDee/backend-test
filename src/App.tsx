import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-data' element={<AddUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
