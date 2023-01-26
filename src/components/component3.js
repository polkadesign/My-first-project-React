import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <div className="component3-container1">
        <label className="component3-text">{props.text}</label>
      </div>
      <div className="component3-container2">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="component3-textinput input"
        />
      </div>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
  text: 'Label:',
  textinput_placeholder: 'placeholder',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Component3
