// src/components/StudentClass.js
import React, { Component } from 'react';

class StudentClass extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Address: {this.props.address}</p>
        <p>Scores: {this.props.scores.join(', ')}</p>
      </div>
    );
  }
}

export default StudentClass;