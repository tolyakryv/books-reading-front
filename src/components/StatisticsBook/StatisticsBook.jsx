import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
// import { HandySvg } from "handy-svg";
import StatisticBookMobile from "../StatisticBookMobile/StatisticBookMobile";
import Media from "react-media";
import { useGetAllBookQuery } from "../../services/booksAPI";
import s from "./StatisticsBook.module.css";

// import Icon from "../../img/icon library.svg";

const StatisticsBook = () => {
  const { data } = useGetAllBookQuery();
  const columnDefs = [
    {
      headerName: "Назва книги",
      field: "title",
      width: 250,
      height: 70,
      checkboxSelection: true,
      cellStyle: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "17px",
        color: "#242A37",
      },
      cellClicked: true,
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

  const onCellClicked = (e) => {
    console.log("Cell was clicked");
  };

  function RowSelected(event) {
    if (event.node.isSelected()) {
      console.log("deselected");
      event.node.setSelected(false, false);
    } else {
      event.node.setSelected(true);
      console.log("selected, add");
    }
  }

  var gridOptions = {
    columnDefs: columnDefs,
    onRowClicked: RowSelected,
    suppressRowClickSelection: true,
    enableRangeSelection: true,
    enableCellChangeFlash: true,
    rowSelection: "multiple",
    rowData: null,
  };

  const bookGoingToRead = () => {
    if (data.result.some((book) => book.status === "goingToRead")) {
      return data.result.filter((book) => book.status === "goingToRead");
    }
  };
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <StatisticBookMobile
              data={bookGoingToRead()}
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
            height: "130px",
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
                rowData={bookGoingToRead()}
                columnDefs={columnDefs}
                onCellClicked={onCellClicked}
                gridOptions={gridOptions}
              />
            )}
          />
          {/* {data.result.some((book) => book.status === "goingToRead") && (
            <AgGridReact
              className={s.grid}
              // headerHeight={headerHeight}
              rowData={bookGoingToRead()}
              columnDefs={columnDefs}
              onCellClicked={onCellClicked}
              gridOptions={gridOptions}
            />
          )} */}
        </div>
      </div>
    </section>
  );
};
export default StatisticsBook;
