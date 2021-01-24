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

export const Songs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_GET_ALL_SONGS_URL)
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      });

    fetch(process.env.REACT_APP_GET_SONG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `
      {getSongInfo(song: "Checles") {artist playCount metricA}}`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      {songs.length ? (
        <Table>
          <TableHeader songs={songs} setSongs={setSongs} />
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
