import React from "react";

function Education({university, degree, major, start, end}) {
  return (
    <div className="container">
      <h2>{university}</h2>
      <h3>{degree} </h3>
      <h4>{major} </h4>
      <h5> {start} </h5>
      <h5> {end} </h5>
    </div>
  );
}

export default Education;
