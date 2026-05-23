import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import s from './QrCodeScanner.module.css'
import { SCAN_DATA } from '../constans'
export function QrCodeScanner() {
    const [scanned, setScanned] = useState(null)
    const scanHandle = (result) => {
        if (!result) return;

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        if (prevData.includes(result.text)) return;

        setScanned(result.text);

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result.text])
        );
    }

    const settings = {
        audio: false,
        // finder:false
    }
    return (
        <div className={s.container}>
            <QrReader
                constraints={{ facingMode: 'environment' }}
                scanDelay={1000}
                onResult={scanHandle}
                containerStyle={{ width: '500px' }}
            />
            {/* <Scanner
                components={settings}
                onScan={scanHandle}
                styles={{ container: { width: 350 } }}
                onError={(error) => console.log(error?.message)}
            /> */}
            <p className={s.result}>{scanned}</p>
        </div>)
}
