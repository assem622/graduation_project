import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Projects from './Components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContextProvider from './Context/userContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const routers = createBrowserRouter([
  {path:'/' , element:<Layout/>  , children:[{
    index:true , element:<Home/>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
    {path:'Categories' , element: <Categories/>},
    {path:'Projects' , element:<Projects/> },
    {path:'*' , element:<Notfound/>
  }]}
])

function App() {
  return <>
  <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    </UserContextProvider>
    </>
}

export default App;
