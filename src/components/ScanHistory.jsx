import { QRCodeSVG } from "qrcode.react"
import { SCAN_DATA } from "../constans"
export function ScanHistory() {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA)) || []
    return (
        <ol>{data.map((item, index) => (
            <li key={index}>{item}<QRCodeSVG value={item} size={100} /></li>))}
        </ol>)
}
