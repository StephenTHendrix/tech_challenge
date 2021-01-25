export const formatSongKey = (value) => {
  if (value.includes('metric')) {
    return value.replace('metric', 'Metric ');
  } else if (value === 'playCount') {
    return 'Play Count';
  } else if (value === 'songReleaseDate') {
    return 'Song Release Date';
  }

  return value;
};
