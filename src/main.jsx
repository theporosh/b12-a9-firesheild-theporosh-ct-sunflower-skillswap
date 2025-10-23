import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/routes.jsx'
import "aos/dist/aos.css";
import AOS from "aos";
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider.jsx'

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster position="top-center"></Toaster>
  </StrictMode>,
);
