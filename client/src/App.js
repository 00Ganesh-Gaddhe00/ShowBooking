import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
//stylesheets
import './StyleSheets/register.css';

function App() {

  const { loading } = useSelector((state) => state.loader);


  return (
    <div>
       
       {loading &&(
            <div className="loader-container">
          {" "}
          <div className="loader"> </div>{" "}
        </div>
        )}
        

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
