import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';
import styles from './Chart.module.css';
import { useGetTrainQuery } from '../../services/trainingAPI';
import { useLocation } from 'react-router-dom';

export function Chart() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const { data = [] } = useGetTrainQuery();
  const { statistic = [] } = data;

  const amountPagesFromStatistic = statistic?.reduce(
    (totalPages, statisticBookInfo) => totalPages + statisticBookInfo.amountPages,
    0
  );

  const amountDays = statistic.length;

  let amountPagesForDay = 0;

  if (amountDays || amountPagesFromStatistic) {
    amountPagesForDay = Math.ceil(amountPagesFromStatistic / amountDays);
  }

  const { pathname } = useLocation();

  console.log('location', pathname);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: '#B1B5C2',
          display: isMobile ? false : true,
          tickWidth: 0,
          borderColor: '#B1B5C2',
        },
        title: {
          display: true,
          text: 'ЧАС',
          align: 'end',
          color: '#091E3F',
          padding: -3,
          font: {
            size: 12,
            weight: 600,
            family: 'Montserrat',
            lineHeight: 1.25,
          },
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#B1B5C2',
          display: false,

          borderColor: '#B1B5C2',
        },
        position: 'left',
        ticks: {
          display: false,
        },
      },
      y2: {
        grid: {
          color: '#B1B5C2',
          display: false,

          borderColor: '#B1B5C2',
        },
        position: 'right',
        ticks: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = statistic.map(item => item.date);

  const readPagesFromStatistic = statistic.map(item => item.amountPages);
  const pagesToRead = statistic.map(item => amountPagesForDay);

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'План',
        data: pathname === '/statistic' ? pagesToRead : [],
        borderColor: '#091E3F',
        backgroundColor: '#091E3F',
        pointRadius: 5,
        lineTension: 0.3,
      },
      {
        label: 'Факт',
        data: pathname === '/statistic' ? readPagesFromStatistic : [],

        borderColor: '#FF6B08',
        backgroundColor: '#FF6B08',
        pointRadius: 5,
        lineTension: 0.3,
      },
    ],
  };

  return (
    <div className={styles.chartSectionWrapper}>
      <div className={styles.chartInfoWrapper}>
        <div className={styles.amountWrapper}>
          <p className={styles.amountLabel}>КІЛЬКІСТЬ СТОРІНОК / ДЕНЬ</p>
          <p className={styles.amountBox}>{pathname === '/statistic' ? amountPagesForDay : 0}</p>
        </div>
        <div className={styles.lineTitleBox}>
          <p className={styles.lineTitleValue}>План</p>
          <p className={styles.lineTitleValue}>Факт</p>
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <Line options={options} data={dataChart} />
      </div>
    </div>
  );
}
