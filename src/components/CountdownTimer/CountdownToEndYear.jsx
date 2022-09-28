import useCountdown from "../../hooks/useCountdown";
import ShowCounter from "./ShowCounter";

const CountdownToEndYear = ({ startDateTime, endDateTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(
    startDateTime,
    endDateTime
  );
  if (days + hours + minutes + seconds <= 0) {
    console.log("countdown is over");
    return <ShowCounter days="00" hours="00" minutes="00" seconds="00" />;
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

export default CountdownToEndYear;
