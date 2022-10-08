import { useEffect, useState } from "react";

const ONE_SECOND = 1000;

const useCountdown = (startTime, endTime, isCountingStatus = true) => {
  const timeLeft = endTime - startTime;
  const [countdown, setCountdown] = useState(timeLeft);
  const [isCounting] = useState(isCountingStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setCountdown((countdown) =>
          countdown >= 1 ? countdown - ONE_SECOND : 0
        );
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, isCounting]);
  return countdown;
};

export default useCountdown;
