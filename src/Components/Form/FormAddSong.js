import React from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../../Actions";

function SongForm() {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    const title = e.target.title.value;
    const artist = e.target.artist.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;

    dispatch(addSong(title, artist, genre, rating));
    e.target.reset();
    e.preventDefault();
  };
  return (
    <>
      <style>
        {`input, select {
                padding: 8px;
                border-radius: 2px;
            }`}
      </style>

      <div className="bg-indigo-400 rounded text-indigo-800 my-16 p-4">
        <form
          id="form-add-song"
          className="flex flex-col lg:flex-row gap-8 justify-between"
          onSubmit={handleForm}
        >
          <input type="text" id="title" placeholder="Title" required></input>
          <input type="text" id="artist" placeholder="Artist" required></input>
          <select id="genre" required>
            <option value="">Select Genre</option>
            <option value="rock">rock</option>
            <option value="pop">pop</option>
            <option value="classical">classical</option>
            <option value="jazz">jazz</option>
            <option value="blues">blues</option>
          </select>
          <select id="rating" required>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            className="bg-white text-indigo-800 py-2 px-4 uppercase font-bold rounded"
          >
            Add to list
          </button>
        </form>
      </div>
    </>
  );
}

export default SongForm;
