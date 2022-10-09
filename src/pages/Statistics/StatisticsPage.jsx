import styled from "styled-components";
import { useEffect, useState } from "react";
import { HandySvg } from "handy-svg";
import { format } from "date-fns";
import {
  useAddTrainStatisticMutation,
  useDelTrainMutation,
  useGetTrainQuery,
  useUpdateStatusBookMutation,
} from "../../services/trainingAPI";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import Modal from "../../components/Modal/Modal";
import ShowTimer from "../../components/Timer/ShowTimer/ShowTimer";
import MyTarget from "../../components/MyTarget/MyTarget";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import StatisticsBook from "../../components/StatisticsBook/StatisticsBook";
import { Chart } from "../../components/Chart/Chart";
import s from "./StatisticsPage.module.css";
import Thumb from "../../img/thumb_up orange.svg";
import { useNavigate } from "react-router-dom";

const ShowTimerStyled = styled(ShowTimer)`
  margin-bottom: 40px;
`;
const MyTargetStyled = styled(MyTarget)`
  margin-bottom: 20px;
`;
const StatisticsBookStyled = styled(StatisticsBook)`
  margin-bottom: 32px;
`;
// const ChartStyled = styled(Chart)`
//   margin-bottom: 32px;
// `;

const StatisticsPage = () => {
  const navigate = useNavigate();

  const { data } = useGetTrainQuery();
  const [updateStatusBook] = useUpdateStatusBookMutation();
  const [addTrainStatistics] = useAddTrainStatisticMutation();
  const [deleteTrain] = useDelTrainMutation();

  const [recentlyReadPages, setRecentlyReadPages] = useState(0);
  const [newBookIsRead, setNewBookIsRead] = useState(false);
  const [trainIsFinished, setTrainIsFinished] = useState(false);

  const onReadBook = async (amountPages) => {
    try {
      const countBooksLeft = data.book.filter(
        (book) => book.status === "readingNow"
      );

      await addTrainStatistics({
        formalizedDate: format(new Date(), "dd.MM.yyyy"),
        pageNumber: amountPages - recentlyReadPages,
        createdAt: new Date().toLocaleTimeString(),
      });

      if (countBooksLeft !== 1) {
        setNewBookIsRead(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteTrain = async () => {
    try {
      console.log("Delete Train");
      await deleteTrain();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAlreadyReadBooks = async (books, statistic) => {
      try {
        const alreadyReadBooks = books.filter(
          (book) => book.status === "alreadyRead"
        );
        const countPagesOfAlreadyReadBooks = alreadyReadBooks.reduce(
          (acc, book) => acc + book.amountPages,
          0
        );
        const ReadingNowBooks = books.filter(
          (book) => book.status === "readingNow"
        );

        const countReadPages = statistic.reduce(
          (acc, book) => acc + book.amountPages,
          0
        );

        const countRecentlyPages =
          countReadPages - countPagesOfAlreadyReadBooks;

        setRecentlyReadPages(countRecentlyPages);

        const countBooksLeft = readingNowBooks.length;
        const firstBook = ReadingNowBooks[0];

        if (countRecentlyPages < firstBook.amountPages) return;

        const bookId = firstBook._id;
        const status = "alreadyRead";
        await updateStatusBook({
          bookId,
          status,
        });

        console.log(countBooksLeft);

        if (countBooksLeft !== 1) setNewBookIsRead(true);
      } catch (error) {
        console.log(error);
      }
    };

    if (!data) return;

    const { book, statistic } = data;

    const readingNowBooks = book.filter((book) => book.status === "readingNow");
    if (readingNowBooks.length === 0) {
      setTrainIsFinished(true);
      // console.log("Delete Train");
      // deleteTrain();
      return;
    }

    checkAlreadyReadBooks(book, statistic);
  }, [data, deleteTrain, recentlyReadPages, updateStatusBook]);

  return (
    <>
      <Mobile>
        <div className={s.containerPage}>
          <ShowTimerStyled />
          <MyTargetStyled />
          <StatisticsBookStyled onReadBook={onReadBook} />
          <Chart />
          <StatisticsTable />
        </div>
      </Mobile>
      <Tablet>
        <div className={s.containerPage}>
          <ShowTimerStyled />
          <MyTargetStyled />
          <StatisticsBookStyled onReadBook={onReadBook} />
          <Chart />
          <StatisticsTable />
        </div>
      </Tablet>
      <Desktop>
        <div className={s.containerPage}>
          <div className={s.wrapperRow}>
            <div className={s.wrapperCol}>
              <ShowTimer />
              <StatisticsBook onReadBook={onReadBook} />
            </div>
            <MyTarget />
          </div>
          <div className={s.wrapperRow}>
            <Chart />
            <StatisticsTable />
          </div>
        </div>
      </Desktop>
      {newBookIsRead && (
        <Modal>
          <div>
            <div className={s.svgContainer}>
              <HandySvg src={Thumb} className={s.svgThumb} />
            </div>
            <p className={s.text}>Вітаю!</p>
            <p className={s.text}>Ще одна книга прочитана.</p>
            <button
              type="button"
              onClick={() => setNewBookIsRead(false)}
              className={s.modalButton}
            >
              Готово
            </button>
          </div>
        </Modal>
      )}
      {trainIsFinished && (
        <Modal>
          <div>
            <div className={s.svgContainer}>
              <HandySvg src={Thumb} className={s.svgThumb} />
            </div>
            <p className={s.text}>ВІТАЄМО! YOU ARE THE BEST!</p>
            <p className={s.text}>
              Ціль досягнута. Все прочитано в визначений строк. Можна
              розпочинати нове тренування.
            </p>

            <button
              type="button"
              onClick={onDeleteTrain}
              className={s.modalButton}
            >
              Готово
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default StatisticsPage;
