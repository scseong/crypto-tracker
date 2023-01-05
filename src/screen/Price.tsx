import React from 'react';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinTickers } from '../api';
import { ICoinPrice } from '../typings/db';
import { Overview, OverviewItem } from './styles';

interface IContext {
  coinId: string;
}
const Price = () => {
  const { coinId } = useOutletContext<IContext>();
  const { isLoading: tickersLoading, data: tickersData } = useQuery<ICoinPrice>(
    ['tickers', coinId],
    () => fetchCoinTickers(`${coinId}`)
  );

  return (
    <div>
      {tickersLoading ? (
        '...Loading'
      ) : (
        <Overview>
          <OverviewItem>
            <span>PRICE</span>
            <span>$ {tickersData?.quotes.USD.price.toFixed(2)}</span>
          </OverviewItem>
          <OverviewItem>
            <span>1h</span>
            <span>{tickersData?.quotes.USD.percent_change_1h}%</span>
          </OverviewItem>
          <OverviewItem>
            <span>6h</span>
            <span>{tickersData?.quotes.USD.percent_change_6h}%</span>
          </OverviewItem>
          <OverviewItem>
            <span>12h</span>
            <span>{tickersData?.quotes.USD.percent_change_12h}%</span>
          </OverviewItem>
          <OverviewItem>
            <span>24h</span>
            <span>{tickersData?.quotes.USD.percent_change_24h}%</span>
          </OverviewItem>
        </Overview>
      )}
    </div>
  );
};

export default Price;
