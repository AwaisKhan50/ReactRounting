import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './About/About.jsx'
import User from './User/User.jsx'

// const router=createBrowserRouter([
//   { path: '/', element: <Layout/>,
//     children: [
//       { path: "", element: <Home/> },
//       { path:"contact", element: <Contact/>},
//       { path:"about", element: <About/>},
//     ],
//    },
// ])

// we can also write the above code by using another method

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userId' element={<User/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
