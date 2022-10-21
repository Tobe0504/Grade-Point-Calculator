import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import CourseInput from "./Components/CourseInput";
import CourseRecord from "./Components/CourseRecord";
import CalculateButton from "./Components/CalculateButton";
import ErrorModal from "./Components/ErrorModal";
import "./App.css";

function App() {
  const [dummyData, setDummyData] = useState([]);
  const [gp, setGp] = useState("");
  const [displayForm, setDisplayForm] = useState(true);
  const [displayButtonContent, setDisplayButtonContent] = useState(true);
  const [loadDisplay, setLoadDisplay] = useState();

  useEffect(() => {
    setLoadDisplay({
      header: "Welcome to your Grade Point Calculator!",
      body: "Please note data entered cannot in any way be reterieved and privacy is therefore guaranteed. If you are making use of a mobile device (a smart phone or a tablet), you can double tap on the saved Course Entry to delete while on desktops or laptops, there is a delete button and it allows for double-clicking to delete as well.",
    });
  }, []);

  const saveHandler = (newData) => {
    const mainNewData = [...dummyData, newData];
    setDummyData(mainNewData);
  };
  const gpCollectHandler = (gpData) => {
    setGp(gpData);
    console.log(gp);
  };

  const dataFiltterHandler = (key) => {
    console.log(key);

    const filteredData = dummyData.filter((keys) => {
      return keys.key !== key;
    });

    setDummyData(filteredData);
    console.log(dummyData);
  };

  const hideHander = () => {
    setDisplayForm(!displayForm);
    setDisplayButtonContent(!displayButtonContent);
  };

  const loadDisplayClick = () => {
    setLoadDisplay();
  };

  return (
    <div className="App">
      {loadDisplay && (
        <ErrorModal
          header={loadDisplay.header}
          body={loadDisplay.body}
          onClick={loadDisplayClick}
        />
      )}
      <Header />
      {displayForm && <CourseInput onSave={saveHandler} />}
      <div className="button">
        <button onClick={hideHander}>
          {displayButtonContent ? "Hide Form" : "Show Form"}
        </button>
      </div>
      <CourseRecord data={dummyData} onDataFilter={dataFiltterHandler} />
      {dummyData.length < 2 ? null : (
        <CalculateButton
          calculateData={dummyData}
          onAppCollect={gpCollectHandler}
        />
      )}
    </div>
  );
}

export default App;
