import { useAlert } from "./alert/AlertContext"

export default function Main() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Привет в примере с useContext</h1>
            <button onClick={toggle} className="btn">Показать alert</button>
        </>
    )
}