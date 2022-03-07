import React from "react";
import "./CourseRecord.css";

const CourseRecord = (props) => {
  return (
    <div>
      {props.data.map((datum) => (
        <div
          key={datum.key}
          className="course-record-container"
          onDoubleClick={() => {
            props.onDataFilter(datum.key);
          }}
        >
          <div className="course-record-name">
            <h3>{datum.title} </h3>
          </div>
          <div className="course-record-unit">
            <b>{datum.units} Units </b>
          </div>
          <div className="course-record-grade">
            <b>Grade: {datum.grade} </b>
          </div>
          <div className="course-record-delete">
            <button
              onClick={() => {
                props.onDataFilter(datum.key);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseRecord;
