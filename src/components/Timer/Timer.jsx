import CountdownToEndYear from "./CountdownToEndYear";
import CountdownToTarget from "./CountdownToTarget";
import getEndOfYear from "./getEndOfYear";

const startTime = new Date("2022-09-28T19:39:30").getTime();
const endTime = new Date("2022-09-28T19:39:35").getTime();
const now = Date.now();
// const now = new Date("2022-12-31T23:59:50").getTime();
// const endOfYear = new Date(2022, 11, 32);
const endOfYear = getEndOfYear(new Date().getFullYear());

const Timer = () => {
  return (
    <>
      <CountdownToEndYear startTime={now} endTime={endOfYear} />
      <CountdownToTarget startTime={startTime} endTime={endTime} />
    </>
  );
};

export default Timer;
