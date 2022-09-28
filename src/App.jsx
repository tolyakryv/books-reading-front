import React from "react";
import LibraryPage from "./pages/Library/LibraryPage";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import CountdownToEndYear from "./components/CountdownTimer/CountdownToEndYear";

const startDateTime = new Date("2022-09-28T19:39:30").getTime();
const endDateTime = new Date("2022-09-28T19:39:35").getTime();
const now = Date.now();
// const now = new Date("2022-12-31T23:59:50").getTime();
const endOfYear = new Date(2022, 11, 32);

function App() {
  return (
    <>
      <LibraryPage></LibraryPage>
      <CountdownTimer startDateTime={startDateTime} endDateTime={endDateTime} />
      <CountdownToEndYear startDateTime={now} endDateTime={endOfYear} />
    </>
  );
}
export default App;
