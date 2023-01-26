import React from 'react'

import PropTypes from 'prop-types'

import './input.css'

const Input = (props) => {
  return (
    <div className="input-container">
      <div className="input-input">
        <div className="input-container1">
          <div className="input-label">
            <span className="input-text">
              <span className="input-text1">Aktebezeichnung*</span>
              <span>:</span>
            </span>
          </div>
        </div>
        <div className="input-container2">
          <div className="input-text3">
            <input
              type="text"
              placeholder={props.InputContent_placeholder}
              className="input-input-content"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Input.defaultProps = {
  InputContent_placeholder: 'Verordnung XXX',
}

Input.propTypes = {
  InputContent_placeholder: PropTypes.string,
}

export default Input
