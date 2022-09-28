import { useEffect, useState } from "react";
import getPadTime from "../helpers/getPadTime";

const useCountdown = (startDateTime) => {
  const countDownDate = new Date(startDateTime).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = getPadTime(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = getPadTime(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = getPadTime(Math.floor((countDown % (1000 * 60)) / 1000));

  return [days, hours, minutes, seconds];
};

export { useCountdown };
