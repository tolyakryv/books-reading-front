import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import { useState } from "react";
import { HandySvg } from "handy-svg";
import Thumb from "../../img/thumb_up orange.svg";
import StatisticBookMobile from "../StatisticBookMobile/StatisticBookMobile";
import Media from "react-media";
import Modal from "../../components/Modal/Modal";
import {
  useGetTrainQuery,
  useUpdateStatusBookMutation,
} from "../../services/trainingAPI";
import s from "./StatisticsBook.module.css";

const StatisticsBook = ({ onReadBook }) => {
  const { data } = useGetTrainQuery();
  const [updateStatusBook] = useUpdateStatusBookMutation();
  const [IsModal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const checkBoxRenderer = (e) => {
    return (
      <div className={s.checkBoxCont}>
        <input
          type="checkbox"
          id={e.data._id}
          name="book"
          checked={e.data.status === "alreadyRead"}
          onChange={() => onCellClicked(e.data._id)}
        ></input>
        <label htmlFor={e.data._id}>
          <span></span>
        </label>
      </div>
    );
  };

  const columnDefs = [
    {
      headerName: "Назва книги",
      field: "title",
      width: 250,
      height: 70,
      cellStyle: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "17px",
        color: "#242A37",
      },
      cellRenderer: checkBoxRenderer,
    },
    {
      headerName: "Aвтор",
      field: "author",
      width: 150,
    },
    {
      headerName: "Рік",
      field: "publicDate",
      width: 115,
    },
    {
      headerName: "Стор.",
      field: "amountPages",
      width: 130,
    },
  ];

  const onCellClicked = async (id) => {
    const chbox = document.getElementById(id);
    console.log(chbox.checked);
    console.log(id);

    if (chbox.checked) {
      try {
        const bookId = id;
        const status = "alreadyRead";
        await updateStatusBook({
          bookId,
          status,
        });
        setModal(true);
        await onReadBook(data.book.find((book) => book._id === id).amountPages);
      } catch (err) {
        console.error(err);
      }
    }
  };

  var gridOptions = {
    columnDefs: columnDefs,
    suppressRowClickSelection: true,
    enableRangeSelection: true,
    enableCellChangeFlash: true,
    rowSelection: "multiple",
    rowData: null,
  };

  const bookGoingToRead = () => {
    return data?.book.filter(
      (book) => book.status === "readingNow" || book.status === "alreadyRead"
    );
    // }
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <StatisticBookMobile
              onReadBook={onReadBook}
              data={bookGoingToRead()}
              cellItem={
                <div>
                  <input type="checkbox" id="book" name="book" />
                </div>
              }
            />
          )}
        />
        <div
          className="ag-theme-alpine"
          style={{
            height: "275px",
            width: "100%",
            margin: "0",
            fontFamily: "Montserrat",
          }}
        >
          <Media
            query="(min-width: 768px)"
            render={() => (
              <AgGridReact
                className={s.grid}
                rowData={bookGoingToRead()}
                columnDefs={columnDefs}
                gridOptions={gridOptions}
              />
            )}
          />
        </div>
      </div>
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
    </section>
  );
};
export default StatisticsBook;
