import React from 'react';
import './button_style.scss';
import arrowimg from '../asset/right-arrow.svg'
import PropTypes from 'prop-types';


const Button = ({value,classStyle}) => {
    return (
       <button className={classStyle}>{value}  <img src={arrowimg} alt="" /></button>
    )
}

export default Button
