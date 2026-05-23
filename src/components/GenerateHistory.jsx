
import { QRCodeSVG } from "qrcode.react"
import { GENERATE_DATA } from "../constans"
export function GenerateHistory() {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA)) || []
    return (
        <ol>{data.map((item, index) => (
            <li key={index}>{item}<QRCodeSVG value={item} size={100} /></li>
        ))}</ol>)
}
