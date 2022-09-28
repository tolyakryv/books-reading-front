import useCountdown from "../../hooks/useCountdown";
import ShowCounter from "./ShowCounter";

const CountdownToTarget = ({ startTime, endTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(startTime, endTime);
  if (days + hours + minutes + seconds <= 0) {
    console.log("countdown is over");
    return (
      <>
        <p>До досягнення мети залишилось</p>
        <ShowCounter days="00" hours="00" minutes="00" seconds="00" />
      </>
    );
  } else {
    return (
      <>
        <p>До досягнення мети залишилось</p>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </>
    );
  }
};

export default CountdownToTarget;
