import React, { useMemo } from 'react';
import styled from 'styled-components';

import { SortArrow } from '_components';
import { colors } from '_constants';
import { formatSongKey } from '_utils/formatSongKey';

const StyledTableHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TableCell = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid ${colors.tableBorder};
  padding: 20px;
  min-width: 225px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  background-color: ${colors.table};
`;

const ColumnName = styled.div`
  margin-right: auto;
  text-transform: capitalize;
`;

const SortArrowClickContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const TableHeader = ({ songs, setSongs, songKeys }) => {
  const compare = (column, orderBy) => {
    return (a, b) => {
      if (a[column] < b[column]) {
        return orderBy === 'descending' ? 1 : -1;
      }
      if (a[column] > b[column]) {
        return orderBy === 'descending' ? -1 : 1;
      }
      return 0;
    };
  };

  const sortAndSetSongs = (column, orderBy) => {
    const sortedSongs = [...songs].sort(compare(column, orderBy));
    setSongs((songs) => sortedSongs);
  };

  const map = useMemo(() => {
    const mappedSongKeys = {};
    songKeys?.map(
      (songKey) => (mappedSongKeys[songKey] = formatSongKey(songKey))
    );
    return mappedSongKeys;
  }, [songKeys]);

  return (
    <StyledTableHeader>
      {songKeys.map((songKey, index) => (
        <TableCell key={songKey + '-' + index}>
          <ColumnName>{map[songKey]}</ColumnName>
          <SortArrowClickContainer
            onClick={() => sortAndSetSongs(songKey, 'ascending')}
          >
            <SortArrow />
          </SortArrowClickContainer>
          <SortArrowClickContainer
            onClick={() => sortAndSetSongs(songKey, 'descending')}
          >
            <SortArrow rotate />
          </SortArrowClickContainer>
        </TableCell>
      ))}
    </StyledTableHeader>
  );
};
