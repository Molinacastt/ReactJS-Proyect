import './CartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
        <div className="wid-nav">
            <FontAwesomeIcon icon={faCartShopping} />
            <p className='four'>4</p>
        </div>
    )
}

export default CartWidget