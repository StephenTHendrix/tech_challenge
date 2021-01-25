import React from 'react';
import styled from 'styled-components';
import { colors } from '_constants';

const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TableCell = styled.div`
  display: inline-block;
  border-bottom: 2px solid ${colors.tableBorder};
  padding: 40px 20px;
  min-width: 225px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${colors.fadedBrand};
`;

export const TableRow = ({ song }) => {
  const songValues = Object.values(song);

  return (
    <StyledTableRow>
      {songValues.map((songValue, index) => (
        <TableCell key={songValue + '-' + index}>{songValue}</TableCell>
      ))}
    </StyledTableRow>
  );
};
