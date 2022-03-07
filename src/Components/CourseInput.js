import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [title, setTitle] = useState("");
  const [unit, setUnit] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState();
  const [titleError, setTitleError] = useState(false);
  const [unitError, setUnitError] = useState(false);
  const [gradeError, setGradeError] = useState(false);

  const titleSaveHandler = (event) => {
    setTitle(event.target.value);
  };
  const unitSaveHandler = (event) => {
    setUnit(event.target.value);
  };
  const gradeSaveHandler = (event) => {
    setGrade(event.target.value);
  };

  const dataCollected = {
    title: title,
    units: unit,
    grade: grade,
    key: Math.random(),
  };

  const collectHandler = () => {
    console.log(dataCollected);

    if (
      dataCollected.title.trim() === "" &&
      dataCollected.units === "" &&
      dataCollected.grade === ""
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course title, course unit and your grade.",
      });
      setTitleError(true);
      setUnitError(true);
      setGradeError(true);

      return;
    } else if (
      dataCollected.title &&
      dataCollected.units &&
      !dataCollected.grade
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course grade.",
      });

      setGradeError(true);
      return;
    } else if (
      dataCollected.units &&
      dataCollected.grade &&
      !dataCollected.title
    ) {
      console.log("Boy");
      setError({
        header: "Error",
        body: "Please fill out your course title.",
      });

      setTitleError(true);
      return;
    } else if (
      dataCollected.title &&
      dataCollected.grade &&
      !dataCollected.units
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course unit.",
      });

      setUnitError(true);
      return;
    } else if (
      dataCollected.title &&
      !dataCollected.grade &&
      !dataCollected.units
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course grade and course unit.",
      });

      setGradeError(true);
      setUnitError(true);
      return;
    } else if (
      !dataCollected.title &&
      dataCollected.grade &&
      !dataCollected.units
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course title and course unit.",
      });

      setTitleError(true);
      setUnitError(true);
      return;
    } else if (
      !dataCollected.title &&
      !dataCollected.grade &&
      dataCollected.units
    ) {
      setError({
        header: "Error",
        body: "Please fill out your course title and course grade.",
      });

      setTitleError(true);
      setGradeError(true);
      return;
    } else {
      props.onSave(dataCollected);
      setTitle("");
      setUnit("");
      setGrade("");
      setTitleError(false);
      setUnitError(false);
      setGradeError(false);
    }
  };
  const clickHandler = () => {
    setError();
  };

  return (
    <div className="course-input-container">
      {error && (
        <ErrorModal
          header={error.header}
          body={error.body}
          onClick={clickHandler}
        />
      )}
      <div className="form">
        <div className="label">
          <label htmlFor="input">
            <b>Course Title</b>
          </label>
        </div>
        <div className={titleError ? `${"errorInput"}` : `${"input"}`}>
          <input type="text" onChange={titleSaveHandler} value={title} />
        </div>
        <div className="label">
          <label htmlFor="input">
            <b>Number of Units</b>
          </label>
        </div>
        <div className={unitError ? `${"errorInput"}` : `${"input"}`}>
          <input
            type="number"
            min="1"
            max="5"
            onChange={unitSaveHandler}
            value={unit}
          />
        </div>
        <div className="label">
          <label htmlFor="input">
            <b>Grade</b>
          </label>
        </div>
        <div className={gradeError ? `${"errorInput"}` : `${"input"}`}>
          <input type="text" onChange={gradeSaveHandler} value={grade} />
        </div>
        <div className="button-container">
          <button onClick={collectHandler}>
            <b>Save</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseInput;
