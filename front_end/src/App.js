import React, { useEffect, useState, useMemo } from 'react';
import { awsBaseURL } from '_constants/urlConstants';
import { Routes } from '_routes';

export const App = () => {
  const [allSongsData, setAllSongsData] = useState([]);
  const [songKeys, setSongKeys] = useState([]);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    fetch(awsBaseURL + process.env.REACT_APP_GET_ALL_SONGS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setAllSongsData(data);
        setSongKeys(Object.keys(data[0]));
      })
      .catch((error) => {
        setFetchFailed(true);
      });
  }, []);

  return (
    <Routes
      allSongsData={allSongsData}
      songKeys={songKeys}
      fetchFailed={fetchFailed}
    />
  );
};
