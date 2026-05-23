import { useState } from 'react'
import './App.css'
import { QrCodeGenerator } from './components/QrCodeGenerator'
import { QrCodeScanner } from './components/QrCodeScanner'
import { Navigation } from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { ScanHistory } from './components/ScanHistory';
import { GenerateHistory } from './components/GenerateHistory';
export function Layout() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navigation></Navigation>
      {/* <QrCodeGenerator/>
      <QrCodeScanner/> */}

      <Routes>
        <Route path='/qr' element={<QrCodeGenerator />}></Route>
        <Route path='/scan' element={<QrCodeScanner />}></Route>
        <Route path='/scanHistory' element={<ScanHistory />}></Route>
        <Route path='/qrHistory' element={<GenerateHistory />}></Route>
      </Routes>
    </div>
  )
}

