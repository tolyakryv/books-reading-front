import styled from "styled-components";
import ShowTimer from "../../components/Timer/ShowTimer/ShowTimer";
import MyTarget from "../../components/MyTarget/MyTarget";
import s from "./StatisticsPage.module.css";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import StatisticsBook from "../../components/StatisticsBook/StatisticsBook";
import { Chart } from "../../components/Chart/Chart";

const ShowTimerStyled = styled(ShowTimer)`
  margin-bottom: 40px;
`;
const MyTargetStyled = styled(MyTarget)`
  margin-bottom: 20px;
`;
// const StatisticsBookStyled = styled(StatisticsBook)`
//   margin-bottom: 32px;
// `;
// const ChartStyled = styled(Chart)`
//   margin-bottom: 32px;
// `;

const StatisticsPage = () => {
  return (
    <>
      <div className={s.containerPage}>
        <ShowTimerStyled />
        <MyTargetStyled />
        <StatisticsBook />
        <Chart />
        <StatisticsTable />
      </div>
    </>
  );
};

export default StatisticsPage;
