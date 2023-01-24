
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

import NewProduct from './components/newProduct/NewProduct';
import NewUser from './components/newUser/NewUser';
import Product from './components/product/Product';
import Showdata from './components/showdata/Showdata';

import Sidebar from './components/Sidebar/Sidebar';

import Topbar from './components/Topbar/Topbar';
import User from './components/user/User';
import Home from './pages/Home/Home';
import UserList from './pages/Home/userList/UserList';

function App() {
  return (
    <div >
 
     <Topbar/>
 <div className='container'>
 <BrowserRouter>
 <Sidebar/>

 <Routes>
  <Route path="/" element={<Home/>}></Route>
 </Routes>
 <Routes>
  <Route path="/users" element={<UserList/>}></Route>
  <Route path={"/user/:userId"} element={<User/>}/>
  <Route path={"/product"} element={<Product/>}></Route>
  <Route path="/newproduct" element={<NewProduct/>}/>
  <Route path="/newUser" element={<NewUser/>}/>
 <Route path="/showdata" element={<Showdata/>}/>

 </Routes>
 </BrowserRouter>
 </div>

</div>
  );
}

export default App;

    
     
  

