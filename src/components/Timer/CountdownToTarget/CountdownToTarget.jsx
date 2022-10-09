import { toast } from "react-toastify";
import { HandySvg } from "handy-svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Thumb from "../../../img/thumb_up.svg";
import { ONE_SECOND_IN_MS } from "../../../helpers/constants";
import useCountdown from "../../../hooks/useCountdown";
import ShowCounter from "../ShowCounter/ShowCounter";
import transformMSTime from "../../../components/Timer/transformMSTime";
import {
  useGetTrainQuery,
  useDelTrainMutation,
} from "../../../services/trainingAPI";
import s from "./CountdownToTarget.module.css";

const CountdownToTarget = ({ startTime, endTime }) => {
  const [isCountingStatus, setIsCountingStatus] = useState(true);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const navigate = useNavigate;
  const [deleteTrain] = useDelTrainMutation();
  const { data } = useGetTrainQuery();
  const countdown = useCountdown(startTime, endTime, isCountingStatus);

  useEffect(() => {
    if (!data) return;
    const booksAlreadyRead = data.book.filter(
      (item) => item.status === "alreadyRead"
    ).length;
    const amountBooks = data.book.length;
    if (booksAlreadyRead >= amountBooks) {
      setIsCountingStatus(false);
    }
  }, [data, isCountingStatus, countdown]);

  const [days, hours, minutes, seconds] = transformMSTime(
    countdown < 0 ? countdown * -1 : countdown
  );
  if (countdown < 0 && countdown >= -ONE_SECOND_IN_MS) {
    setIsTimeOver(true);
    toast.info(
      "Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)"
    );
  }

  const onDeleteTrain = async () => {
    try {
      await deleteTrain();
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className={s.countdownContainer}>
        <p className={s.caption}>До досягнення мети залишилось</p>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
      {isTimeOver && (
        <div className={s.overlay}>
          <div className={s.modal}>
            <div className={s.svgContainer}>
              <HandySvg src={Thumb} className={s.svgThumb} />
            </div>
            <p className={s.text}>
              Ти молодчина, але потрібно швидше! Наступного разу тобі все
              вдасться
            </p>
            <div className={s.modalButtomContainer}>
              <button
                type="button"
                onClick={onDeleteTrain}
                className={s.modalButton}
              >
                Новє тренування
              </button>
              <button
                className={s.modalButton}
                onClick={() => setIsTimeOver(false)}
              >
                Назад
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownToTarget;
