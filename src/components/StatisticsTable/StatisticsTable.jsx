import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
// import EllipsisText from "react-ellipsis-text";
import "ag-grid-community/styles//ag-grid.css";
import s from "./StatisticsTable.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { format } from "date-fns";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import {
  useAddTrainStatisticMutation,
  useGetTrainQuery,
} from "../../services/trainingAPI";

const StatisticsTable = () => {
  const [addTrainStatistics] = useAddTrainStatisticMutation();
  const { data = [] } = useGetTrainQuery();
  const [date, setDate] = useState(new Date());
  const [pageNumber, setPageNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const headerHeight = 0;

  const columnDefs = [
    {
      headerName: "date",
      field: "date",
      width: 87,
      cellStyle: { fontSize: "10px" },
    },
    {
      headerName: "createAt",
      field: "createAt",
      width: 87,
      cellStyle: { fontSize: "10px", color: "#898F9F" },
    },
    {
      headerName: "amountPages",
      field: "amountPages",
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

  const handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    setCreatedAt(new Date().toLocaleTimeString());
    console.log(createdAt);
    if (name === "pageNumber") {
      setPageNumber(Number(value));
    }
  };

  const fetchNewStatistics = async (e) => {
    try {
      const formalizedDate = format(new Date(date), "dd.MM.yyyy");
      await addTrainStatistics({
        formalizedDate,
        pageNumber,
        createdAt,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNewStatistics();
    setDate(new Date());
    setCreatedAt("");
    setPageNumber("");
  };

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h4 className={s.headerStatistic}>Результати</h4>
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
          <div className={s.buttonWrapper}>
            <button type="submit" className={s.button}>
              Додати результат
            </button>
          </div>
          {/* </div> */}
        </form>
        <h4 className={s.header}>Статистика</h4>
        <div>
          <div
            className={s.ag}
            style={{
              height: "138px",
              width: "100%",
              margin: "0",
            }}
          >
            {data && (
              <AgGridReact
                headerHeight={headerHeight}
                rowData={data.statistic}
                columnDefs={columnDefs}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatisticsTable;
