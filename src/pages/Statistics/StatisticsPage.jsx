import styled from "styled-components";
import { useEffect, useState } from "react";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import ShowTimer from "../../components/Timer/ShowTimer/ShowTimer";
import MyTarget from "../../components/MyTarget/MyTarget";
import s from "./StatisticsPage.module.css";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import StatisticsBook from "../../components/StatisticsBook/StatisticsBook";
import Modal from "../../components/Modal/Modal";
import { HandySvg } from "handy-svg";
import Thumb from "../../img/thumb_up orange.svg";
import { Chart } from "../../components/Chart/Chart";
import {
  useAddTrainStatisticMutation,
  useDelTrainMutation,
  useGetTrainQuery,
  useUpdateStatusBookMutation,
} from "../../services/trainingAPI";
import { format } from "date-fns";

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
  const { data } = useGetTrainQuery();
  const [updateStatusBook] = useUpdateStatusBookMutation();
  const [addTrainStatistics] = useAddTrainStatisticMutation();
  const [deleteTrain] = useDelTrainMutation();
  const [recentlyReadPages, setRecentlyReadPages] = useState(0);
  const [IsModal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const setModalWindow = () => {
    setModal(true);
  };

  const onReadBook = async (amountPages) => {
    try {
      await addTrainStatistics({
        formalizedDate: format(new Date(), "dd.MM.yyyy"),
        pageNumber: amountPages - recentlyReadPages,
        createdAt: new Date().toLocaleTimeString(),
      });
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

        const firstBook = ReadingNowBooks[0];

        if (countRecentlyPages < firstBook.amountPages) return;

        const bookId = firstBook._id;
        const status = "alreadyRead";
        await updateStatusBook({
          bookId,
          status,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (!data) return;

    const { book, statistic } = data;

    const readingNowBooks = book.filter((book) => book.status === "readingNow");
    if (readingNowBooks.length === 0) {
      console.log("Delete Train");
      deleteTrain();
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
          <StatisticsBookStyled
            onReadBook={onReadBook}
            setModalWindow={setModalWindow}
          />
          <Chart />
          <StatisticsTable />
        </div>
      </Mobile>
      <Tablet>
        <div className={s.containerPage}>
          <ShowTimerStyled />
          <MyTargetStyled />
          <StatisticsBookStyled
            onReadBook={onReadBook}
            setModalWindow={setModalWindow}
          />
          <Chart />
          <StatisticsTable />
        </div>
      </Tablet>
      <Desktop>
        <div className={s.containerPage}>
          <section className={s.section}>
            <div className={s.wrapperRow}>
              <div className={s.wrapperCol}>
                <ShowTimer />
                <StatisticsBook
                  onReadBook={onReadBook}
                  setModalWindow={setModalWindow}
                />
              </div>
              <MyTarget />
            </div>
            <div className={s.wrapperRow}>
              <Chart />
              <StatisticsTable />
            </div>
          </section>
        </div>
      </Desktop>
      {IsModal && (
        <Modal>
          <div>
            <div className={s.svgContainer}>
              <HandySvg src={Thumb} className={s.svgThumb} />
            </div>
            <p className={s.text}>Вітаю!</p>
            <p className={s.text}>Ще одна книга прочитана.</p>
            <button
              type="button"
              onClick={closeModal}
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
