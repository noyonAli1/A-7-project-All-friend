import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Home from './page/home/Home';
import Timeline from './page/timeline/Timeline';
import Stats from './page/stats/Stats';
import FriendsDetails from './page/friendsDetails/FriendsDetails';
import FriendsContexprovider from './context/friendsContexprovider';
import { Bounce, ToastContainer } from 'react-toastify';
import Error from './page/error/Error';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
     children:[
    {
      index:true,
      Component:Home
    },
    {
      path:"/timeline",
      Component:Timeline
    },
    {
      path:"/stats",
      Component:Stats,
    },
    {
      path:"/friendsdetails/:id",
      Component:FriendsDetails,
    },
   
  


  ],
  errorElement:<Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
  <FriendsContexprovider>
     <RouterProvider router={router} />,
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

  </FriendsContexprovider>


  </StrictMode>,
)
