import React from "react";
import LibraryPage from "./pages/Library/LibraryPage";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

const startDateTime = new Date().getTime();
const endDateTime = new Date("2022-09-28T19:39:30").getTime();

function App() {
  return (
    <>
      <LibraryPage></LibraryPage>
      <CountdownTimer startDateTime={startDateTime} endDateTime={endDateTime} />
    </>
  );
}
export default App;
