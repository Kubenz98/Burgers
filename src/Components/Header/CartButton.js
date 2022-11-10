import CartIcon from "./CartIcon"
import classes from './CartButton.module.scss'
const CartButton = () => {

    return (
        <button className={classes.button}><CartIcon />Your cart<span className={classes['button__amount']}>0</span></button>
    )
}

export default CartButton