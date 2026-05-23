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
        <Route path='/qr-code/qr' element={<QrCodeGenerator />}></Route>
        <Route path='/qr-code/scan' element={<QrCodeScanner />}></Route>
        <Route path='/qr-code/scanHistory' element={<ScanHistory />}></Route>
        <Route path='/qr-code/qrHistory' element={<GenerateHistory />}></Route>
      </Routes>
    </div>
  )
}

