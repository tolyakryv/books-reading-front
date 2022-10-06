import styled from "styled-components";
import ShowTimer from "../../components/Timer/ShowTimer/ShowTimer";
import MyTarget from "../../components/MyTarget/MyTarget";
// import Training from "../../components/Training/Training";
import s from "./StatisticsPage.module.css";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import StatisticsBook from "../../components/StatisticsBook/StatisticsBook";
import { Chart } from "../../components/Chart/Chart";

const ShowTimerStyled = styled(ShowTimer)`
  margin-bottom: 40px;
  background-color: red;
  color: red;
  height: 600px;
`;

const StatisticsPage = () => {
  // const Container = styled.div`
  //   margin-bottom: 40px;
  //   background-color: red;
  //   color: red;
  //   height: 600px;
  // `;

  return (
    <>
      <div className={s.containerPage}>
        <ShowTimerStyled />
        <MyTarget />
        <StatisticsBook />
        <Chart />
        {/* <Training /> */}
        <StatisticsTable />
      </div>
    </>
  );
};

export default StatisticsPage;
