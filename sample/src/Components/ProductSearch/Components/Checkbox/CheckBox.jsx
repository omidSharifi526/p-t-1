import React from 'react';
import './checkbox_style.scss';
import PropTypes from 'prop-types';


const CheckBox = ({ label, checked, handleCheckbox, styleClass }) => {

    const handleChange = (e) => {
        const { checked } = e.target;
        handleCheckbox(checked)

    }


    return (
        <div className={`sample ${styleClass}`}>


            {/* <input className="main" id="SEO" type="checkbox" style={{display: 'none'}} />
            <label className="inside-label" for="SEO">
                <span>
                    <svg width="12px" height="10px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>SEO</span>
            </label> */}
            <label >
          <input className='checkInput' type="checkbox"
            defaultChecked={checked}
            onChange={handleChange}
            value={checked}
            
            />
            {label}
          </label>


        </div>
    )
}

CheckBox.propTypes = {
    styleClass: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    handleCheckbox: PropTypes.func.isRequired
};


CheckBox.defaultProps = {
    styleClass: ''
}

export default CheckBox;



//class selected label  onchange 
