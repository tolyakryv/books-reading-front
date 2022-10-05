import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import { useGetAllBookQuery } from "../../services/booksAPI";
import s from "./StatisticsBook.module.css";

const StatisticsBook = () => {
  const { data = [] } = useGetAllBookQuery();
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
      //   onSelectionChanged: (event) => onSelectionChanged(event),
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
      //   cellStyle: {
      //     fontSize: "14px",
      //     fontWeight: 500,
      //     lineHeight: "17px",
      //     color: "#242A37",
      //   },
      //   cellRenderer: (p) => (
      //     <>
      //       {p.value}&nbsp;
      //       <span className={s.spanColor}> стор.</span>
      //     </>
      //   ),
    },
    {
      headerName: "Стор.",
      field: "amountPages",
      width: 130,
      //   cellStyle: {
      //     fontSize: "14px",
      //     fontWeight: 500,
      //     lineHeight: "17px",
      //     color: "#242A37",
      //   },
    },
  ];
  //   const onSelectionChanged = (e) => {
  //     console.log("Checkbox was clicked");
  //   };

  //   const autoGroupColumnDef = {
  //     headerName: "Назва книги",
  //     field: "title",
  //     minWidth: 250,
  //     cellRenderer: "agGroupCellRenderer",
  //     cellRendererParams: {
  //       checkbox: true,
  //     },
  //   };
  //      {
  //        rowSelection: 'multiple',
  //   groupSelectsChildren: true,
  //   suppressRowClickSelection: true,
  //   suppressAggFuncInHeader: true,
  //   }
  //     }

  //   const gridOptions = {
  //     // Add event handlers
  //     onCellClicked: (event: CellClickedEvent) => console.log("Cell was clicked"),
  //   };

  const onCellClicked = (e) => {
    console.log("Cell was clicked");
  };

  //   function RowSelected(event) {
  //     if (event.node.isSelected()) {
  //       console.log("deselected");
  //       event.node.setSelected(false, false);
  //     } else {
  //       event.node.setSelected(true);
  //       console.log("selected, add");
  //     }
  //     }
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

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div
          className="ag-theme-alpine"
          style={{
            height: "130px",
            width: "100%",
            margin: "0",
            fontFamily: "Montserrat",
          }}
        >
          {/* {data && ( */}
          <AgGridReact
            className={s.grid}
            // headerHeight={headerHeight}
            rowData={data.result}
            columnDefs={columnDefs}
            onCellClicked={onCellClicked}
            gridOptions={gridOptions}
            // rowHeight={rowHeight}
          />
          {/* )} */}
        </div>
      </div>
    </section>
  );
};
export default StatisticsBook;
