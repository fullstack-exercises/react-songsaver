import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteSong } from "../../Actions";

function SongList() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const parentId = parseFloat(e.target.parentElement.parentElement.id);
    dispatch(deleteSong(parentId));
  };

  const songData = useSelector((state) => state.song);
  const songList = songData.track.map((song) => (
    <tr id={song.id} key={song.id} className="listed-song text-sm">
      <td width="20%">{song.title} </td>
      <td width="20%">{song.artist} </td>
      <td width="20%">{song.genre} </td>
      <td width="20%">{song.rating} </td>
      <td width="20%">
        <button
          onClick={handleClick}
          className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0 text-indigo-600"
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return <tbody>{songList}</tbody>;
}

export default SongList;
