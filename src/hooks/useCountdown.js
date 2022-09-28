import { useEffect, useState } from "react";
import getPadTime from "../helpers/getPadTime";

const useCountdown = (startDateTime, endDateTime) => {
  const deltaTime = endDateTime - startDateTime;
  const [countdown, setCountdown] = useState(deltaTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);
  // console.log(countdown);

  return transformMSTime(countdown);
};

const transformMSTime = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = getPadTime(new Date(countdown).getHours());
  const minutes = getPadTime(new Date(countdown).getMinutes());
  const seconds = getPadTime(new Date(countdown).getSeconds());
  return [days, hours, minutes, seconds];
};

export { useCountdown };
