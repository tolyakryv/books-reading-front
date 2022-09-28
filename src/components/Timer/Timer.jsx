import CountdownToEndYear from "./CountdownToEndYear";
import CountdownToTarget from "./CountdownToTarget";
import getEndOfYear from "./getEndOfYear";

const startDateTime = new Date("2022-09-28T19:39:30").getTime();
const endDateTime = new Date("2022-09-28T19:39:35").getTime();
const now = Date.now();
// const now = new Date("2022-12-31T23:59:50").getTime();
// const endOfYear = new Date(2022, 11, 32);
const endOfYear = getEndOfYear(new Date().getFullYear());

const Timer = () => {
  return (
    <>
      <CountdownToEndYear startDateTime={now} endDateTime={endOfYear} />
      <CountdownToTarget
        startDateTime={startDateTime}
        endDateTime={endDateTime}
      />
    </>
  );
};

export default Timer;
