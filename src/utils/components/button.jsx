import React from 'react'
import PropTypes from 'prop-types'

function Button({ children,href,version }) {
    return (
        <div>
            <a href={href} className={`${version} px-7 py-3 text-black border-2 rounded-lg`}>
                {children}
            </a>
        </div>

    )
}

Button.defaultProps = {
    version: '',
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button