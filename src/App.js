import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import HomePage from './pages/homePage/HomePage'
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import NewProduct from './pages/newProduct/NewProduct'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="appContainer">
          <Sidebar />
          <div className="appOthersPage">
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/users' exact element={<UserList />} />
              <Route path='/user/:idUser' exact element={<User />} />
              <Route path='/newuser' exact element={<NewUser />} />
              <Route path='/products' exact element={<ProductList />} />
              <Route path='/product/:idProduct' exact element={<Product />} />
              <Route path='/newproduct' exact element={<NewProduct />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;