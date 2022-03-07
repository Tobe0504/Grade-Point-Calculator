import React, { useState } from "react";
import "./CalculateButton.css";
import ErrorModal from "./ErrorModal";

const CalculateButton = (props) => {
  const [gpDisplay, setGpDisplay] = useState();

  const collectedData = props.calculateData;

  const clickHandler = () => {
    const mappedGrade = collectedData.map((data) => {
      return data.grade;
    });
    // console.log(mappedGrade);
    const newMapped = mappedGrade.map((x) => {
      if (x === "a" || x === "A") {
        return 5;
      }
      if (x === "b" || x === "B") {
        return 4;
      }
      if (x === "c" || x === "C") {
        return 3;
      }
      if (x === "d" || x === "D") {
        return 2;
      }
      if (x === "e" || x === "E") {
        return 1;
      }
      if (x === "f" || x === "F") {
        return 0;
      }
    });
    // console.log(newMapped);

    const mappedUnit = collectedData.map((dataUnit) => {
      return dataUnit.units;
    });

    const numberMappedUnits = mappedUnit.map((i) => {
      return Number(i);
    });
    //const multipliedData = newMapped * numberMappedUnits;

    var multipliedData = [];
    for (var i = 0; i < newMapped.length; i++) {
      multipliedData[i] = newMapped[i] * numberMappedUnits[i];
    }
    // console.log(multipliedData);

    var aggregateScore = 0;
    for (var j = 0; j < multipliedData.length; j++) {
      aggregateScore += multipliedData[j];
    }
    // console.log(aggregateScore);

    var aggregateUnits = 0;
    for (var k = 0; k < numberMappedUnits.length; k++) {
      aggregateUnits += numberMappedUnits[k];
    }
    // console.log(aggregateUnits);

    const gradePoint = aggregateScore / aggregateUnits;
    const estimatedGp = gradePoint.toFixed(3);
    // console.log(estimatedGp);

    props.onAppCollect(estimatedGp);
    setGpDisplay({
      header: "Your Grade Point",
      body: "Your Grade Point is " + estimatedGp,
    });
  };

  const removeModalHandler = () => {
    setGpDisplay();
  };

  return (
    <div className="calculate-button-container">
      {gpDisplay && (
        <ErrorModal
          header={gpDisplay.header}
          body={gpDisplay.body}
          onClick={removeModalHandler}
        />
      )}
      <button onClick={clickHandler}>
        <b>Calculate</b>
      </button>
    </div>
  );
};

export default CalculateButton;
