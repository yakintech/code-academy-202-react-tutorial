import { Link, Route, Routes } from "react-router-dom"
import HomePage from './lessons/pages/HomePage'
import AboutPage from './lessons/pages/AboutPage'
import ContactPage from './lessons/pages/ContactPage'
import NotFoundPage from "./lessons/pages/NotFoundPage"
import ProductPage from "./lessons/pages/ProductPage"
import ProductDetail from "./lessons/pages/ProductDetail"
import Login from "./lessons/pages/Login"
import Auth from "./lessons/pages/Auth"
import AntdIntro from "./lessons/antd/AntdIntro"
import AntTable from "./lessons/antd/AntTable"



function App() {

  let loginControl = localStorage.getItem('login');



  return <>
    <h1>Site Header</h1>
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/antd'>Antd</Link></li>
        <li><Link to='/anttable'>Antd</Link></li>
      </ul>
    </div>
    <Routes>

      <Route path="/" element={<HomePage />}></Route>
      <Route path="/antd" element={<AntdIntro />}></Route>
      <Route path="/anttable" element={<AntTable />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contact" element={loginControl ? <ContactPage/> : <Login/>}></Route>
      <Route path="/products" element={
        <Auth>
          <ProductPage />
        </Auth>
      
      }></Route>
      <Route path="/products/:id" element={
        <Auth>
          <ProductDetail />
        </Auth>
      }></Route>

      
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
    <h1>Site Footer</h1>
  </>
}

export default App
