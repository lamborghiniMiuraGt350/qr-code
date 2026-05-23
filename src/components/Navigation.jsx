import { Link } from "react-router-dom";
import './Navigation.css'
export function Navigation() {
    return (<nav style={{display:'flex',gap:'20px',justifyContent:'center'}}>
        <Link to={'/qr'}>Генерировать QR code</Link>
        <Link to={'/scan'}>Сканировать QR code</Link>
        <Link to={'/scanHistory'}>История сканирования</Link>
        <Link to={'/qrHistory'}>История генерации</Link>
    </nav>)
}
