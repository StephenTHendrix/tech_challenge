import React, { useEffect, useState } from 'react';
import { Routes } from '_routes';

export const App = () => {
  const [allSongsData, setAllSongsData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_GET_ALL_SONGS_URL)
      .then((response) => response.json())
      .then((data) => {
        setAllSongsData(data);
      });
  }, []);

  return <Routes allSongsData={allSongsData} />;
};
