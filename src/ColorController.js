import React from 'react';
import { connect } from 'react-redux'

const ColorController = (props) => {
  return (
    <div>
      <button onClick={() => props.onColorChange('Red')}>Red</button>
      <button onClick={() => props.onColorChange('Green')}>Green</button>
      <button onClick={() => props.onColorChange('Blue')}>Blue</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onColorChange: color => {
      dispatch({
        type: 'COLOR_CHANGE',
        color: color
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ColorController)

