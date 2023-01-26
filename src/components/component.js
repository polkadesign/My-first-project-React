import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-frame2084">
        <img
          alt={props.Vector31_alt}
          src={props.Vector31_src}
          className="component-vector31"
        />
        <div className="component-frame2052">
          <div className="component-frame1848">
            <div className="component-frame18481">
              <img
                alt={props.fluentcheckboxchecked20regular_alt}
                src={props.fluentcheckboxchecked20regular_src}
                className="component-fluentcheckboxchecked20regular"
              />
            </div>
          </div>
          <span className="component-text">
            <span>
              Interne Prüfung
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>abgeschlossen</span>
          </span>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  fluentcheckboxchecked20regular_src:
    '/playground_assets/fluentcheckboxchecked20regular3218-201q.svg',
  Vector31_alt: 'Vector313218',
  Vector31_src: '/playground_assets/vector313218-ezz.svg',
  fluentcheckboxchecked20regular_alt: 'fluentcheckboxchecked20regular3218',
}

AppComponent.propTypes = {
  fluentcheckboxchecked20regular_src: PropTypes.string,
  Vector31_alt: PropTypes.string,
  Vector31_src: PropTypes.string,
  fluentcheckboxchecked20regular_alt: PropTypes.string,
}

export default AppComponent
