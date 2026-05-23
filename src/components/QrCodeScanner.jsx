import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../constans'

export function QrCodeScanner() {
    const [scanned, setScanned] = useState(null)

    const scanHandle = (result) => {
        if (!result) return
        const prev = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
        if (prev.includes(result[0].rawValue)) return
        setScanned(result)
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prev, result[0].rawValue]))
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