import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Layout'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { QrCodeGenerator } from './components/QrCodeGenerator';
import { QrCodeScanner } from './components/QrCodeScanner';
import { Navigation } from './components/Navigation';

const router = createBrowserRouter([
  {
    path: '/qr-code',
    element: <Layout />
  },
  {
    path: '/scan',
    element: <QrCodeScanner />
  },
  {
    path: '/qr',
    element: <QrCodeGenerator />
  },
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router}/>
  // </StrictMode>,

  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
