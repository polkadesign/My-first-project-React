import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-input">
        <div className="component2-bottom">
          <span className="component2-text">
            <span className="component2-text1">Aktebezeichnung*</span>
            <span>:</span>
          </span>
        </div>
        <div className="component2-top">
          <input
            type="text"
            placeholder={props.InputContent_placeholder}
            className="component2-input-content"
          />
        </div>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  InputContent_placeholder: 'Verordnung XXX',
}

Component2.propTypes = {
  InputContent_placeholder: PropTypes.string,
}

export default Component2
