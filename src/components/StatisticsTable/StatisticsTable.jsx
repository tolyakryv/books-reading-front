import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import "ag-grid-community/styles//ag-grid.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";
import {
  useAddTrainStatisticMutation,
  useGetTrainQuery,
} from "../../services/trainingAPI";
import s from "./StatisticsTable.module.css";
import "./Statistics-DatePicker.css";

const StatisticsTable = () => {
  const [addTrainStatistics] = useAddTrainStatisticMutation();
  const { data } = useGetTrainQuery();
  const [date, setDate] = useState(new Date());
  const [pageNumber, setPageNumber] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const headerHeight = 0;
  let dataRev = [];

  if (data?.statistic) {
    dataRev = [...data?.statistic].reverse();
  }

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
      setPageNumber(value);
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
                    maxDate={new Date()}
                    format={"d.MM.yy"}
                    onChange={setDate}
                    clearIcon={null}
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
                  min="1"
                  max="999"
                  className={s.input}
                  label="Кількість сторінок"
                  type="number"
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
        </form>
        <h4 className={s.header}>Статистика</h4>
        <div>
          <div
            style={{
              height: "120px",
              width: "100%",
              margin: "0",
              overFlow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {data && (
              <AgGridReact
                numberOfLines={3}
                headerHeight={headerHeight}
                rowData={dataRev}
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
