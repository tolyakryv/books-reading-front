import React from "react";
import LibraryPage from "./pages/Library/LibraryPage";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
// import dateTimeAfterThreeDays from "./components/CountdownTimer/TimerConfig";
const startDateTime = "2022-09-28T13:22:30";
// const startDateTime = "1664360550000";
function App() {
  return (
    <>
      <LibraryPage></LibraryPage>
      <CountdownTimer startDateTime={startDateTime} />
    </>
  );
}
export default App;
