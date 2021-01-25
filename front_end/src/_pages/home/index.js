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
  border-radius: 6px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled(Link)`
  color: white;
  height: 75px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${colors.table};
  margin: 0 5px;
`;

export const Home = () => {
  return (
    <>
      <Content>Song Database</Content>
      <Buttons>
        <Button to="/songs">See All Songs</Button>
        <Button to="/song">Get Song Detail</Button>
      </Buttons>
    </>
  );
};
