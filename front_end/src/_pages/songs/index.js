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

export const Songs = ({ allSongsData, songKeys }) => {
  const [songs, setSongs] = useState(allSongsData);

  return (
    <>
      {songs.length ? (
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
