import React from 'react';
import { connect } from 'react-redux'

const NameController = (props) => {
  return (
    <div>
      <button onClick={() => props.onNameChange('Tony')}>Tony</button>
      <button onClick={() => props.onNameChange('Nima')}>Nima</button>
      <button onClick={() => props.onNameChange('Jane')}>Jane</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onNameChange: name => {
      dispatch({
        type: 'NAME_CHANGE',
        name: name
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NameController)

