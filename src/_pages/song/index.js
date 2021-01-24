import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { colors } from '_constants';
import { SongAttributeCard } from './components/songAttributeCard';

const Content = styled.div`
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
`;

const StyledInput = styled.input`
  width: 200px;
  height: 60px;
  margin: 0 5px;
  text-align: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: white;
  cursor: pointer;
  margin: 0 5px;
  border: 1px solid gray;
`;

const RunQueryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto 50px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

export const Song = ({ allSongsData }) => {
  const [songs, setSongs] = useState(allSongsData);
  const [songName, setSongName] = useState('');
  const [selectedQueryArguments, setSelectedQueryArguments] = useState([]);
  const [returnedSongInfo, setReturnedSongInfo] = useState({});

  const songKeys = Object.keys(songs?.[0] || []);

  const formatHeaderCell = (value) => {
    if (value.includes('metric')) {
      return value.replace('metric', 'Metric ');
    } else if (value === 'playCount') {
      return 'Play Count';
    } else if (value === 'songReleaseDate') {
      return 'Song Release Date';
    }

    return value;
  };

  const map = useMemo(() => {
    return songKeys.map((songKey) => ({
      songKey,
      songValue: formatHeaderCell(songKey),
    }));
  }, [songKeys]);

  const runQuery = () => {
    fetch(process.env.REACT_APP_GET_SONG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `
      {getSongInfo(song: "${songName}") {${selectedQueryArguments.join(',')}}}`,
    })
      .then((response) => response.json())
      .then((data) => {
        setReturnedSongInfo(data.data.getSongInfo);
      });
  };

  const handleQueryArgumentSelect = (argument) => {
    let currentArguments = [...selectedQueryArguments];

    if (currentArguments.includes(argument)) {
      currentArguments = currentArguments.filter(
        (currentArgument) => currentArgument !== argument
      );
    } else {
      currentArguments.push(argument);
    }
    setSelectedQueryArguments(currentArguments);
  };

  return (
    <>
      <RunQueryContainer>
        <StyledInput
          placeholder="Enter Song Name"
          onChange={(event) => setSongName(event.target.value)}
        />
        <Button onClick={runQuery}>Get Song Detail</Button>
      </RunQueryContainer>
      <OptionsContainer>
        {map.map((song) => (
          <SongAttributeCard
            key={song.songKey}
            label={song.songValue}
            onClick={() => handleQueryArgumentSelect(song.songKey)}
            selected={selectedQueryArguments.includes(song.songKey)}
          />
        ))}
      </OptionsContainer>
      <Details>
        {Object.keys(returnedSongInfo).map((key) => (
          <div key={key}>
            {formatHeaderCell(key)}: {returnedSongInfo[key]}
          </div>
        ))}
      </Details>
    </>
  );
};
