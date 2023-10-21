import Carrito from "./assets/Carrito.png"
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="wid-nav">
            <img src={Carrito} alt="carrito" width="70px" height="70px"/>
            4
        </div>
    )
}

export default CartWidget