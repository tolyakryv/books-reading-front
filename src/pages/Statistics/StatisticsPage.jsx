import styled from "styled-components";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
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
const StatisticsBookStyled = styled(StatisticsBook)`
  margin-bottom: 32px;
`;
// const ChartStyled = styled(Chart)`
//   margin-bottom: 32px;
// `;

const StatisticsPage = () => {
  return (
    <>
      <Mobile>
        <div className={s.containerPage}>
          <ShowTimerStyled />
          <MyTargetStyled />
          <StatisticsBookStyled />
          <Chart />
          <StatisticsTable />
        </div>
      </Mobile>
      <Tablet>
        <div className={s.containerPage}>
          <ShowTimerStyled />
          <MyTargetStyled />
          <StatisticsBookStyled />
          <Chart />
          <StatisticsTable />
        </div>
      </Tablet>
      <Desktop>
        <div className={s.containerPage}>
          <div className={s.wrapperRow}>
            <div className={s.wrapperCol}>
              <ShowTimer />
              <StatisticsBook />
            </div>
            <MyTarget />
          </div>
          <div className={s.wrapperRow}>
            <Chart />
            <StatisticsTable />
          </div>
        </div>
      </Desktop>
    </>
  );
};

export default StatisticsPage;
