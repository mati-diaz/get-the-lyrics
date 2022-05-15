import { useState } from "react";
import { Loading } from "./Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Form
  const [formValues, setFormValues] = useState({
    artist: 'coldplay',
    song: 'Adventure of a Lifetime'
  });
  const { artist, song } = formValues;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!artist) return toast.error('Se necesita un artista');
    if (!song) return toast.error('Se necesita una canción');

    getLyrics(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  }

  // Data
  const [data, setData] = useState({
    lyrics: '',
    loading: false
  });
  const { lyrics, loading } = data;

  const getLyrics = async (url) => {
    setData({
      ...data,
      loading: true
    });
    const res = await fetch(url);
    const { lyrics } = await res.json();
    setData({
      ...data,
      lyrics,
      loading: false
    });
  }

  if (loading) return <Loading />

  return (
    <div className="app">
      <ToastContainer />
      <h1 className="app__title">Get The Lyrics</h1>
      <form onSubmit={ handleSubmit } className='form'>
        <input
          type="text"
          placeholder="Introduce el nombre del cantante/grupo"
          name="artist"
          value={ artist }
          onChange={ handleInputChange }
          className='form__input'
        />
        <input
          type="text"
          placeholder="Introduce el nombre de la canción"
          name="song"
          value={ song }
          onChange={ handleInputChange }
          className='form__input'
        />
        <button
          type="submit"
          className="form__button"
        >
          Buscar
        </button>
      </form>
      {
        lyrics &&
        <p className="app__lyrics">{ lyrics }</p>
      }
    </div>
  );
}

export default App;
