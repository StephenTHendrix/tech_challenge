import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Loader } from '_components';
import { colors } from '_constants';
import { TableHeader, TableRow } from './components';

const Table = styled.div`
  margin: 0 50px 50px;
  border: 1px solid #c33052;
  overflow: scroll;
  border-radius: 16px;
`;

const ShowError = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.table};
  color: white;
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  text-align: center;
`;

export const Songs = ({ allSongsData, songKeys, fetchFailed }) => {
  const [songs, setSongs] = useState(allSongsData);

  return (
    <>
      {fetchFailed ? (
        <ShowError>We ran into a problem retrieving the data.</ShowError>
      ) : songs.length ? (
        <Table>
          <TableHeader songs={songs} setSongs={setSongs} songKeys={songKeys} />
          {songs.map((song, index) => (
            <TableRow song={song} key={song.song + '-' + index} />
          ))}
        </Table>
      ) : (
        <Loader />
      )}
    </>
  );
};
