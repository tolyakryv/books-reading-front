import ShowTimer from "../../components/Timer/ShowTimer/ShowTimer";
// import MyTarget from "../../components/MyTarget";
import Training from "../../components/Training/Training";
import s from "./StatisticsPage.module.css";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import StatisticsBook from "../../components/StatisticsBook/StatisticsBook";
const StatisticsPage = () => {
  return (
    <>
      <div className={s.container}>
        <ShowTimer />
        {/* <MyTarget /> */}
        <Training />
        {/* <Results/> */}
        <StatisticsTable />
        <StatisticsBook />
      </div>
    </>
  );
};

export default StatisticsPage;
