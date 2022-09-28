import { useEffect, useState } from "react";
import transformMSTime from "../helpers/transformMSTime";

const useCountdown = (startDateTime, endDateTime) => {
  const timeLeft = endDateTime - startDateTime;
  const [countdown, setCountdown] = useState(timeLeft);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);
  return transformMSTime(countdown);
};

export default useCountdown;
