import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';

import { Loader } from '_components';
import { colors } from '_constants';
import { awsBaseURL } from '_constants/urlConstants';
import { formatSongKey } from '_utils/formatSongKey';
import { SongDetailCard } from './components/songDetailCard';

const StyledInput = styled.input`
  width: 200px;
  height: 60px;
  margin: 0 5px;
  text-align: center;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid gray;
  color: #45443b;

  &:focus {
    outline: none;
    border: 2px solid ${colors.brand};
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: white;
  ${({ disabled }) => !disabled && 'cursor: pointer'};
  margin: 0 5px;
  border: 2px solid ${({ buttonBorderColor }) => buttonBorderColor};
  border-radius: 6px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${colors.table};
  border-radius: 8px;
  width: 40%;
  padding: 10px;
  color: white;
`;

const ReturnedDetailCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  text-transform: capitalize;
  width: 50%;
  color: #45443b;
`;

const SelectOneText = styled.div`
  text-align: center;
`;

export const Song = ({ songKeys }) => {
  const [songName, setSongName] = useState('');
  const [selectedQueryArguments, setSelectedQueryArguments] = useState([]);
  const [returnedSongInfo, setReturnedSongInfo] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonBorderColor, setButtonBorderColor] = useState('red');

  const userHasInputSong = songName.length > 0;
  const userHasChosenDetails = selectedQueryArguments.length > 0;
  const queryDisabled = !userHasInputSong || !userHasChosenDetails;

  useEffect(() => {
    if (!userHasInputSong && !userHasChosenDetails) {
      setButtonBorderColor(colors.table);
    } else if (
      (!userHasInputSong && userHasChosenDetails) ||
      (userHasInputSong && !userHasChosenDetails)
    ) {
      setButtonBorderColor('#ffde7d');
    } else {
      setButtonBorderColor(colors.brand);
    }
  }, [userHasChosenDetails, userHasInputSong]);

  const handleQueryArgumentSelect = useCallback(
    (argument) => {
      let currentArguments = [...selectedQueryArguments];

      if (currentArguments.includes(argument)) {
        currentArguments = currentArguments.filter(
          (currentArgument) => currentArgument !== argument
        );
      } else {
        currentArguments.push(argument);
      }
      setSelectedQueryArguments(currentArguments);
    },
    [selectedQueryArguments]
  );

  const returnedSongInfoIsEmpty = useMemo(() => {
    return Object.keys(returnedSongInfo).length === 0;
  }, [returnedSongInfo]);

  const songKeyValueMap = useMemo(() => {
    return songKeys.map((songKey) => ({
      songKey,
      songValue: formatSongKey(songKey),
    }));
  }, [songKeys]);

  const optionsMap = useMemo(() => {
    return songKeyValueMap.map((song) => (
      <SongDetailCard
        key={song.songKey}
        label={song.songValue}
        onClick={() => handleQueryArgumentSelect(song.songKey)}
        selected={selectedQueryArguments.includes(song.songKey)}
      />
    ));
  }, [handleQueryArgumentSelect, selectedQueryArguments, songKeyValueMap]);

  const returnedDetailsMap = useMemo(() => {
    return Object.keys(returnedSongInfo).map((key) => (
      <ReturnedDetailCard key={key}>
        {formatSongKey(key)}: {returnedSongInfo[key]}
      </ReturnedDetailCard>
    ));
  }, [returnedSongInfo]);

  const getSongDetail = () => {
    if (queryDisabled) {
      return;
    }
    setLoading(true);
    fetch(awsBaseURL + process.env.REACT_APP_GET_SONG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `
      {getSongInfo(song: "${songName}") {${selectedQueryArguments.join(',')}}}`,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.data?.getSongInfo) {
          setReturnedSongInfo(data?.data?.getSongInfo || data?.errors[0]);
          setError('');
        } else {
          setReturnedSongInfo({});
          setError(data?.errors[0]?.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setReturnedSongInfo({});
        setError(error?.message || 'Something went wrong.');
        console.log(error.message);
      });
  };

  return (
    <>
      <RunQueryContainer>
        <StyledInput
          placeholder="Enter Song Name (Required)"
          onChange={(event) => setSongName(event.target.value)}
        />
        <Button
          onClick={getSongDetail}
          disabled={queryDisabled}
          buttonBorderColor={buttonBorderColor}
        >
          Get Song Detail
        </Button>
      </RunQueryContainer>
      <SelectOneText>
        What would you like to know? Select at least one. (Required)
      </SelectOneText>
      <OptionsContainer>{optionsMap}</OptionsContainer>
      {loading && <Loader />}
      {(!returnedSongInfoIsEmpty || error) && (
        <Details>
          {error === 'Failed to fetch'
            ? `Couldn't retrieve data.`
            : error
            ? 'Something went wrong. Try a different song name.'
            : returnedDetailsMap}
        </Details>
      )}
    </>
  );
};
