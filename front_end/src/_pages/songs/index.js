import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Loader } from '_components';
import { colors } from '_constants';
import { TableHeader, TableRow } from './components';

const Table = styled.div`
  width: 100%;
  border: 1px solid black;
  overflow: scroll;
  background-color: ${colors.table};
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
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
