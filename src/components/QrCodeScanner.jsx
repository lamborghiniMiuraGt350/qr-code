import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../constans'

export function QrCodeScanner() {
    const [scanned, setScanned] = useState(null)

    const scanHandle = (rawValue) => {
        if (!rawValue) return;
        const prev = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        if (prev.includes(rawValue)) return
        setScanned(rawValue)
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prev, rawValue]))
    }

    return (
        <div className={s.container}>
            <Scanner
                onScan={(result) => scanHandle(result[0].rawValue)}
                onError={(error) => console.log(error?.message)}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}