import { useEffect, useState } from "react";

const ONE_SECOND = 1000;

const useCountdown = (startTime, endTime, isCountingStatus = true) => {
  const timeLeft = endTime - startTime;
  const [countdown, setCountdown] = useState(timeLeft);
  const [isCounting] = useState(isCountingStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) =>
        isCounting && countdown >= 1 ? countdown - ONE_SECOND : countdown
      );
      console.log("isCountingStatus", isCountingStatus);
      console.log("interval::", interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, isCounting, isCountingStatus]);
  return countdown;
};

export default useCountdown;
