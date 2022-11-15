import React from 'react'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [
                    {
                        id: "c1",
                        name: "suchi",
                        amount: 2,
                        price: 12.99
                    }
                ].map((item) => (
                    <li>{item.name}</li>
                ))
            }
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <div className={classes.total}>
                    <span>total</span>
                    <span>35.33</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>
                        colse
                    </button>
                    <button className={classes.button}>order</button>
                </div>
            </div>
        </Modal>

    )
}

export default Cart


