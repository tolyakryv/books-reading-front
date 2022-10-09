import { useEffect, useState } from "react";
import CountdownToEndYear from "../CountdownToEndYear/CountdownToEndYear";
import CountdownToTarget from "../CountdownToTarget/CountdownToTarget";
import getEndOfYear from "../getEndOfYear";
import s from "./ShowTimer.module.css";
import { useGetTrainQuery } from "../../../services/trainingAPI";

// const startTime = new Date("2022-09-28T19:39:30").getTime();
// const endTime = new Date("2022-09-28T19:39:45").getTime();
const now = Date.now();
// const now = new Date("2022-12-31T23:59:50").getTime();
// const endOfYear = new Date(2022, 11, 32);
const endOfYear = getEndOfYear(new Date().getFullYear());

const ShowTimer = ({ className }) => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { data } = useGetTrainQuery();

  useEffect(() => {
    if (data) {
      const startTime = data.startDate; //1665273600000
      setStartTime(startTime);
      const endTime = Date.now(data.finishDate);
      setEndTime(endTime);
      console.log("data:::", data);
      console.log("startTime:::", startTime);
      console.log("endTime:::", endTime);
    }
  }, [data]);

  return (
    <div className={`${s.timerContainer} ${className}`}>
      <CountdownToEndYear startTime={now} endTime={endOfYear} />
      <CountdownToTarget startTime={startTime} endTime={endTime} />
    </div>
  );
};

export default ShowTimer;
