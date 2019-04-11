import React, { Component } from 'react';
import { connect } from 'react-redux'

class Name extends Component {
  render() {
    return (<h1>{this.props.name}</h1>)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    name: state.name
  }
}

export default connect(
  mapStateToProps,
  null
)(Name)



