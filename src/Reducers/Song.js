const initialState = {
  track: [],
};

function newSongId(track) {
  const id = track.reduce((id, track) => Math.max(track.id, id), -1);
  return id + 1;
}

const SongReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADDSONG`:
      return {
        ...state,
        track: [
          ...state.track,
          {
            id: newSongId(state.track),
            title: action.payload.title,
            artist: action.payload.artist,
            genre: action.payload.genre,
            rating: action.payload.rating,
          },
        ],
      };
    case `DELETESONG`:
      const trackId = action.payload;
      return {
        ...state,
        track: state.track.filter((track) => track.id !== trackId),
      };
    default:
      return state;
  }
};

export default SongReducer;
