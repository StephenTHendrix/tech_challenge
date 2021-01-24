import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '_constants';

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.brand};
  color: white;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.table};
  color: white;
  height: 75px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  return (
    <>
      <Content>Song Database</Content>
      <Button to="/songs">Get Started</Button>
    </>
  );
};
