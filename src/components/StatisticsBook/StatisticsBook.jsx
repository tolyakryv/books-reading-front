import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import { useState, useEffect } from "react";
// import { HandySvg } from "handy-svg";
import StatisticBookMobile from "../StatisticBookMobile/StatisticBookMobile";
import Media from "react-media";
import { useGetAllBookQuery } from "../../services/booksAPI";
import { useGetTrainQuery } from "../../services/trainingAPI";
import {
  useUpdateStatusBookMutation,
  useDelTrainMutation,
} from "../../services/trainingAPI";
import s from "./StatisticsBook.module.css";

const StatisticsBook = () => {
  // const { data: res } = useGetAllBookQuery();
  const { data = [] } = useGetTrainQuery();
  const [delTrain] = useDelTrainMutation();
  const [updateStatusBook] = useUpdateStatusBookMutation();
  // const [relevantBook, setRelevantBook] = useState([]);
  // const relevantBook = data.book.filter(
  //   (item) => item?.status === "readingNow"
  // );
  // const [tableData, setTableData] = useState(relevantBook);
  const [readingBook, setReadingBook] = useState([]);
  console.log(data);

  // const bookGoingToRead = () => {
  //   // if (data.result.some((book) => book.status === "alreadyRead")) {
  //   return data.result.filter((book) => book.status === "readingNow");
  //   // }
  // };

  useEffect(() => {
    if (data) {
      const relevantBook = data.book.filter(
        (item) => item?.status === "readingNow"
      );
      setReadingBook(relevantBook);
      console.log(relevantBook);
    }
  }, [data]);

  // useEffect(() => {
  //   const bookGoingToRead = async () => {
  //     try {
  //       await delTrain();
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   if (data.book.filter((item) => item?.status !== "readingNow")) {
  //     console.log("readingBook");
  //     bookGoingToRead();
  //     // console.log(data);
  //   }
  // }, [data.book, delTrain]);

  const checkBoxRenderer = (e) => {
    return (
      <input
        type="checkbox"
        onChange={() => {
          onCellClicked(e);
        }}
      />
    );
  };

  const onCellClicked = async (e) => {
    // console.log("Cell was clicked");
    // console.log(e.data._id);
    try {
      const bookId = e.data._id;
      console.log("bookId", bookId);

      // console.log(bookId);
      const status = "alreadyRead";
      await updateStatusBook({
        bookId,
        status,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const columnDefs = [
    {
      headerName: "Назва книги",
      field: "title",
      width: 250,
      height: 70,
      // checkboxSelection: true,
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

  // function RowSelected(event) {
  //   if (event.node.isSelected()) {
  //     console.log("deselected");
  //     event.node.setSelected(false, false);
  //   } else {
  //     event.node.setSelected(true);
  //     console.log("selected, add");
  //   }
  // }

  var gridOptions = {
    columnDefs: columnDefs,
    // onRowClicked: RowSelected,
    suppressRowClickSelection: true,
    enableRangeSelection: true,
    enableCellChangeFlash: true,
    rowSelection: "multiple",
    rowData: null,
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <StatisticBookMobile
              data={readingBook}
              cellItem={
                <div>
                  {/* {" "} */}
                  <input type="checkbox" id="book" name="book" />
                </div>
              }
              //   cellItem={<HandySvg src={Icon} className={s.svg_1} />}
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
                // headerHeight={headerHeight}
                rowData={readingBook}
                columnDefs={columnDefs}
                onCheckBoxClicked={onCellClicked}
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
