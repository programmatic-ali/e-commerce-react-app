import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <div className="logo">ECOMMERCE</div>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/shop'>
                Contact
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                ) : (
                        <Link className="option" to='/signin'>
                            Sign In
                        </Link>
                    )
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);