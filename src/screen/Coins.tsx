import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import { fetchCoins } from '../api';
import { ICoins } from '../typings/db';
import {
  Container,
  Header,
  CoinList,
  Coin,
  Title,
  Loader,
  CoinImg,
} from './styles';

const Coins = () => {
  const { isLoading, data } = useQuery<ICoins[]>('allCoins', fetchCoins);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <CoinImg
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="coin"
                />
                {coin.name}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
      <Outlet />
    </Container>
  );
};

export default Coins;
