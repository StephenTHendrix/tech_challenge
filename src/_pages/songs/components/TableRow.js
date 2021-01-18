import React from 'react';
import styled from 'styled-components';

const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TableCell = styled.div`
  ${({ allowSort }) =>
    allowSort
      ? `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  `
      : 'display: inline-block'};
  border: 1px solid black;
  padding: 5px;
  min-width: 200px;
  max-width: 200px;
  min-height: 10px;
  max-height: 10px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
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
