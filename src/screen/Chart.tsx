import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { isDarkAtom } from '../atom';
import { useRecoilValue } from 'recoil';

interface IContext {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useOutletContext<IContext>();
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data: coinHistory } = useQuery<IHistorical[]>(
    ['history', coinId],
    () => fetchCoinHistory(`${coinId}`)
  );

  const isError = coinHistory?.hasOwnProperty('error');
  const exceptData = coinHistory ?? [];
  const chartData = isError
    ? []
    : exceptData?.map((i) => {
        return {
          x: i.time_close,
          y: [i.open, i.high, i.low, i.close],
        };
      });

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
            },
          ]}
          options={{
            theme: { mode: isDark ? 'dark' : 'light' },
            chart: {
              type: 'candlestick',
              height: 350,
              background: '0',
              fontFamily: 'Noto Sans KR, sans-serif',
            },
            title: {
              text: isError ? 'Not found data' : `${coinId} Chart`,
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
