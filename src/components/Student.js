// src/components/Student.js
import React from 'react';

function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>Scores: {props.scores.join(', ')}</p>
    </div>
  );
}

export default Student;
