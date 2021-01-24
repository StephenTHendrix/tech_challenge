import React, { useMemo } from 'react';
import styled from 'styled-components';

import { SortArrow } from '_components';

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

const ColumnName = styled.div`
  margin-right: auto;
`;

const SortArrowClickContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const formatHeaderCell = (value) => {
  if (value.includes('metric')) {
    return value.replace('metric', 'METRIC ');
  } else if (value === 'playCount') {
    return 'PLAY COUNT';
  } else if (value === 'songReleaseDate') {
    return 'SONG RELEASE DATE';
  }

  return value.toUpperCase();
};

export const TableHeader = ({ songs, setSongs }) => {
  const songKeys = Object.keys(songs[0]);

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
    setSongs(songs => sortedSongs);
  };

  const map = useMemo(() => {
    const mappedSongKeys = {};
    songKeys.map(
      (songKey) => (mappedSongKeys[songKey] = formatHeaderCell(songKey))
    );
    return mappedSongKeys;
  }, [songKeys]);

  return (
    <StyledTableRow>
      {songKeys.map((songKey, index) => (
        <TableCell key={songKey + '-' + index} allowSort>
          <ColumnName style={{ marginRight: 'auto' }}>
            {map[songKey]}
          </ColumnName>
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
    </StyledTableRow>
  );
};
