import styled from 'styled-components';

export const SHeader = styled.header`
  position: absolute;
`;

export const Btn = styled.button`
  border: 0px;
  padding: 0px;
  position: fixed;
  z-index: 99999;
  display: inline-block;
  margin: 1em;
  cursor: pointer;
  top: 0;
  right: 0px;
  border-radius: 50%;
  background: ${(props) => props.theme.itemColor};
  color: ${(props) => props.theme.textColor};
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
`;
