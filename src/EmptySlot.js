import { useEffect } from "react"
import MoleHill from './molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5500)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '15vw' }} src={MoleHill} alt='mole hill' />
        </div>
    )
}

export default EmptySlot