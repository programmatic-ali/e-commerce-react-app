
import React from 'react';
import CustomButton from '../custom-button/custon-button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

export default CartDropDown;