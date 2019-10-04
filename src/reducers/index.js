import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Smells like teen spirit', durantion: '4:05' },
    { title: 'I Want It That Way', durantion: '3:20' },
    { title: 'End of The Road', durantion: '3:45' },
    { title: 'Creep', durantion: '4:15' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})
