import { Link } from "react-router-dom";
import './Navigation.css'
export function Navigation() {
    return (<nav style={{display:'flex',gap:'20px',justifyContent:'center'}}>
        <Link to={'/qr-code/qr'}>Генерировать QR code</Link>
        <Link to={'/qr-code/scan'}>Сканировать QR code</Link>
        <Link to={'/qr-code/scanHistory'}>История сканирования</Link>
        <Link to={'/qr-code/qrHistory'}>История генерации</Link>
    </nav>)
}
