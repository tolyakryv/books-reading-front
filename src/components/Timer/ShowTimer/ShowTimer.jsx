import { useEffect, useState } from "react";
import CountdownToEndYear from "../CountdownToEndYear/CountdownToEndYear";
import CountdownToTarget from "../CountdownToTarget/CountdownToTarget";
import getEndOfYear from "../getEndOfYear";
import s from "./ShowTimer.module.css";
import { useGetTrainQuery } from "../../../services/trainingAPI";

// const startTime = Date.now();
// const endTime = 1665792000000;
const now = Date.now();
const endOfYear = getEndOfYear(new Date().getFullYear());

const ShowTimer = ({ className }) => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { data } = useGetTrainQuery();

  useEffect(() => {
    if (data) {
      const startTime = data.startDate; //1665273600000
      setStartTime(startTime);
      const endTime = data.finishDate;
      setEndTime(endTime);

    }
  }, [data, startTime, endTime]);

  return (
    <div className={`${s.timerContainer} ${className}`}>
      <CountdownToEndYear startTime={now} endTime={endOfYear} />
      {startTime && endTime && (
        <CountdownToTarget startTime={startTime} endTime={endTime} />
      )}
    </div>
  );
};

export default ShowTimer;
