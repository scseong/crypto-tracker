import { useQuery } from 'react-query';
import { Link, useMatch } from 'react-router-dom';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchCoinInfo, fetchCoinTickers } from '../api';
import { ICoin, ICoinPrice, IRouteState } from '../typings/db';
import {
  Container,
  Description,
  Overview,
  Header,
  Loader,
  OverviewItem,
  Title,
  Tabs,
  Tab,
} from './styles';

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation() as IRouteState;
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  const { isLoading: infoLoading, data: infoData } = useQuery<ICoin>(
    ['info', coinId],
    () => fetchCoinInfo(`${coinId}`)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<ICoinPrice>(
    ['tickers', coinId],
    () => fetchCoinTickers(`${coinId}`)
  );

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Link to="/">←</Link>
        <Title>
          {state?.name ? state.name : loading ? 'Loading' : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet context={{ coinId }} />
    </Container>
  );
};

export default Coin;
