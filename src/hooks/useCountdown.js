import { useEffect, useState } from "react";
import { ONE_SECOND_IN_MS } from "../helpers/constants";

const useCountdown = (startTime, endTime, isCountingStatus = true) => {
  const timeLeft = endTime - startTime;
  const [countdown, setCountdown] = useState(timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCountingStatus) {
        clearInterval(interval);
        return;
      }
      isCountingStatus &&
        setCountdown((countdown) => countdown - ONE_SECOND_IN_MS);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, isCountingStatus]);
  return countdown;
};

export default useCountdown;
