import React from 'react';
import styled from 'styled-components';

import { colors } from '_constants';

const AnswerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 70px;
  background-color: white;
  border: 1px solid
    ${({ selected }) => (selected ? colors.brand : colors.border)};
  border-radius: 6px;
  cursor: pointer;
  margin: 10px;
`;

const Indicator = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
  background-color: ${({ selected }) => (selected ? colors.brand : 'white')};
`;

const AnswerText = styled.div`
  text-align: left;
  width: 80%;
  text-transform: capitalize;
`;

export const SongAttributeCard = ({ label, selected, onClick }) => {
  return (
    <AnswerCard selected={selected} onClick={onClick}>
      <Indicator selected={selected} />
      <AnswerText>{label}</AnswerText>
    </AnswerCard>
  );
};
