import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  padding: 20px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const CoinList = styled.ul``;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  transition: color 0.8s ease-in-out;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in-out;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      font-weight: bold;
    }
  }
`;

export const Loader = styled.span`
  display: block;
  text-align: center;
`;

export const CoinImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
