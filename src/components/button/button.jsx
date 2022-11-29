import './button.styles.scss'

/*
default

inverted

google sign in
 */

const BUTTON_TYPES_CLASSES = {
    google: 'google-authentication',
    inverted: 'inverted',
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button
            className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button