import {Outlet, Link} from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {useContext} from "react";
import {ReactComponent as BrandLogo} from "../../assets/crown.svg";
import './navigation.scss'
import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context";

import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <BrandLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}> SIGN OUT</span>) : (
                        <Link className='nav-link' to='/auth'>SIGN IN</Link>)}
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation
