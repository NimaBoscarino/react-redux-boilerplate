import React, { Component } from 'react';
import { connect } from 'react-redux'

class Name extends Component {
  render() {
    return (<h1 style={{color: this.props.color}}>{this.props.name}</h1>)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    name: state.nameData.name,
    color: state.colorData.color
  }
}

export default connect(
  mapStateToProps,
  null
)(Name)



