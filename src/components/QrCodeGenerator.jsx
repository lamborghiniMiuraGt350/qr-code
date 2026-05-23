import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"
import { GENERATE_DATA } from "../constans";
export function QrCodeGenerator() {
    const [text, setText] = useState('https://www.hltv.org/matches/2394228/falcons-vs-legacy-cs-asia-championships-2026');
    const [showQr, setShowQr] = useState('');

    const onClickHandler = () => {
        const prev = JSON.parse(localStorage.getItem(GENERATE_DATA)|| '[]') ;
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prev, text]))

        setShowQr(text)
        setText('')
    }
    const onChangeHandler = (e) => {
        setText(e.target.value)
        setShowQr('')
    }
    console.log(showQr);

    return (
        <div className="container">
            <input type="text" value={text} onChange={onChangeHandler} placeholder="Введите текст..." />
            <button onClick={onClickHandler}>Сгенерировать Qr Code</button>
            {showQr && (<div className='qrWrapper'><QRCodeSVG value={showQr} size={200} /></div>)}
        </div>
    )

}
