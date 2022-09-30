import { useEffect, useState } from "react";
import transformMSTime from "../components/Timer/transformMSTime";

const ONE_SECOND = 1000;

const useCountdown = (startTime, endTime) => {
  const timeLeft = endTime - startTime;
  const [countdown, setCountdown] = useState(timeLeft);
  const [isCounting] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setCountdown((countdown) =>
          countdown >= 1 ? countdown - ONE_SECOND : 0
        );
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, isCounting]);
  return transformMSTime(countdown);
};

export default useCountdown;
