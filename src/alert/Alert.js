import { useAlert } from "./AlertContext"

export default function Alert() {

    const alert = useAlert()

    if(!alert.visible) return null

    return (
        <div className="alert">
            Это очень и очень важное сообщение
        </div>
    )
}