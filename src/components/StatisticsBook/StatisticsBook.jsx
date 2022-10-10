import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import StatisticBookMobile from "../StatisticBookMobile/StatisticBookMobile";
import Media from "react-media";
import {
  useGetTrainQuery,
  useUpdateStatusBookMutation,
} from "../../services/trainingAPI";
import s from "./StatisticsBook.module.css";

const StatisticsBook = ({ onReadBook }) => {
  const { data } = useGetTrainQuery();
  const [updateStatusBook] = useUpdateStatusBookMutation();
  console.log(data);

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
      width: 100,
      headerHeight: 0,
      cellRenderer: checkBoxRenderer,
    },

    {
      headerName: "Назва книги",
      field: "title",
      width: 200,
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
        await onReadBook(data.book.find((book) => book._id === id).amountPages);
        // setModal(true);
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
  console.log(bookGoingToRead());

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
            height: "175px",
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
    </section>
  );
};
export default StatisticsBook;
