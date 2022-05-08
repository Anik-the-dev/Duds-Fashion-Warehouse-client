import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import './css/style.css'
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PrimaryMenu from './components/PrimaryMenu/PrimaryMenu';
import ManageInventory from './components/Inventory/ManageInventory';
import AddInventory from './components/Inventory/AddInventory';
import MyItems from './components/Inventory/MyItems';
import DisplayItem from './components/Inventory/DisplayItem';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <PrimaryMenu></PrimaryMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
        <Route path='/inventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <DisplayItem></DisplayItem>
        </RequireAuth>}></Route>
        <Route path='/additems' element={<RequireAuth>
          <AddInventory></AddInventory>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
          </RequireAuth>

        }></Route>



      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
