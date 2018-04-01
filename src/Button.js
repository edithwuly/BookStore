import React from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames'

function Button(props){
    const cssclass = classNames('Button',props.className);
    return props.href ? <a {...props} className={cssclass} /> : <button {...props} className={cssclass} />;
}

Button.propTypes={
    href: PropsTypes.string
};

export default Button