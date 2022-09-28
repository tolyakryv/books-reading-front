import useCountdown from "../../hooks/useCountdown";
import ShowCounter from "./ShowCounter";

const CountdownTimer = ({ startDateTime, endDateTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(
    startDateTime,
    endDateTime
  );
  if (days + hours + minutes + seconds <= 0) {
    console.log("countdown is over");
    return;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
