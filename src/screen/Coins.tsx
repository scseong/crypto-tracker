import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
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

const coinn = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState<ICoins[]>();

  useEffect(() => {
    // (async () => {
    //   const response = await fetch('https://api.coinpaprika.com/v1/coins');
    //   const json = await response.json();
    //   setCoins(json.slice(0, 100));
    //   setLoading(false);
    // })();
    setCoins(coinn);
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins?.map((coin) => (
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
