import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../constans'
export function QrCodeScanner() {
    const [scanned, setScanned] = useState(null)
    const scanHandle = (result) => {
        setScanned(result[0].rawValue)

        const prev = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
        localStorage.setItem(SCAN_DATA, JSON.stringify([...prev, result[0].rawValue]))
    }

    const settings = {
        audio: false,
        // finder:false
    }
    return (
        <div className={s.container}>
            <Scanner
                components={settings}
                onScan={scanHandle}
                styles={{ container: { width: 350 } }}
                onError={(error) => console.log(error?.message)}
            />
            <p className={s.result}>{scanned}</p>
        </div>)
}
