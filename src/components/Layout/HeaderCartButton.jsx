import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span>
                <CartIcon className={classes.icon} />
            </span>
            <span>your cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton
