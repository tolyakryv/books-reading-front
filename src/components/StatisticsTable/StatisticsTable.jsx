import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import EllipsisText from "react-ellipsis-text";
import "ag-grid-community/styles//ag-grid.css";
import s from "./StatisticsTable.module.css";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import { format } from "date-fns";
// import "react-calendar/dist/Calendar.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import {
  useGetStatisticsQuery,
  useAddStatisticsMutation,
} from "../../redux/slice/statisticsSlice";

const StatisticsTable = () => {
  // const [columnDefs, setColumnDefs] = useState([
  //   { headerName: "date", field: "date" },
  //   { headerName: "createdAt", field: "createdAt" },
  //   { headerName: "pages", field: "pages" },
  // ]);

  const columnDefs = [
    {
      headerName: "date",
      field: "date",
      width: 87,
      cellStyle: { fontSize: "10px" },
    },
    {
      headerName: "createdAt",
      field: "createdAt",
      width: 87,
      cellStyle: { fontSize: "10px", color: "#898F9F" },
    },
    {
      headerName: "pages",
      field: "pages",
      width: 87,
      cellStyle: { fontSize: "10px" },
      cellRenderer: (p) => (
        <>
          {p.value}&nbsp;
          <span className={s.spanColor}> стор.</span>
        </>
      ),
    },
  ];
  // const [rowData, setRowData] = useState([]);

  // useEffect(() => {
  //   fetch("https://6332b8bea54a0e83d256e810.mockapi.io/statistics")
  //     .then((result) => result.json())
  //     .then((rowData) => setRowData(rowData));
  // }, []);

  const [addStatistics] = useAddStatisticsMutation();
  const { data } = useGetStatisticsQuery();
  const [date, setDate] = useState(new Date());
  const [pageNumber, setPageNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    setCreatedAt(new Date().toLocaleTimeString());
    if (name === "pageNumber") {
      setPageNumber(value);
    }

    // switch (name) {
    //   case "date":
    //     setDate(value);

    //     break;

    //   case "pageNumber":
    //     setPageNumber(value);
    //     break;

    //   default:
    //     return;
    // }
  };

  const fetchNewStatistics = async (e) => {
    try {
      const formalizedDate = format(new Date(date), "dd.MM.yyyy");
      await addStatistics({ formalizedDate, pageNumber, createdAt });

      // toast.success("Contact added successfully");
    } catch (err) {
      // toast.error("Error");
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const test = format(new Date(date), "dd.MM.yyyy");
    // console.log(test);
    fetchNewStatistics();
    setDate(new Date());
    setPageNumber("");
    setCreatedAt("");
  };
  const headerHeight = 0;
  // const groupHeaderHeight = 50;
  // api.setPinnedTopRowData(rows);
  // const rowPinnedType = "top";
  // const pinnedTopRowData = "top";

  // const gridOptions = {
  //   pinnedTopRowData: true,
  // };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h4 className={s.headerStatistic}>Статистика</h4>
        <form className={s.form} action="submit" onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <div className={s.labelWrapper}>
              <label className={s.label}>
                Дата
                <div>
                  <DatePicker
                    className={s.input}
                    maxDate={new Date()}
                    format={"d.MM.yy"}
                    onChange={setDate}
                    clearIcon={null}
                    // width={200}
                    height={42}
                    value={date}
                    type="date"
                    name="date"
                    disableCalendar={false}
                    closeCalendar={true}
                    calendarIcon={null}
                    required={true}
                  />
                </div>
              </label>
            </div>
            <div className={s.labelWrapper}>
              <label className={s.label}>
                Кількість сторінок
                <input
                  className={s.input}
                  label="Кількість сторінок"
                  type="text"
                  pattern="\d*"
                  name="pageNumber"
                  value={pageNumber}
                  onChange={handleNameChange}
                  autoComplete="off"
                  required
                />
              </label>
            </div>
          </div>
          {/* <div className={s.button}> */}
          <button type="submit" className={s.button}>
            Додати результат
          </button>
          {/* </div> */}
        </form>
        <h4 className={s.header}>Результати</h4>
        <div className={s.test}>
          <div
            className={s.ag}
            style={{
              height: "100px",
              width: "100%",
              margin: "0",
            }}
          >
            <AgGridReact
              headerHeight={headerHeight}
              rowData={data}
              // totalRow={4}
              // pinnedTopRowData={true}
              columnDefs={columnDefs}

              // groupHeaderHeight={groupHeaderHeight}
              // rowPinned={rowPinnedType}
              // rowPinnedType={pinnedTopRowData}
              // pinnedTopRowData={pinnedTopRowData}
            />
            <EllipsisText text={"1234567890"} length={"7"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatisticsTable;
