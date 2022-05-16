import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Form, FormField, Input, Label } from './styles';

export const SearchForm = ({ getLyrics }) => {
  const [formValues, setFormValues] = useState({
    artist: '',
    song: ''
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

    if (!artist) return toast.error('Se necesita un grupo/artista');
    if (!song) return toast.error('Se necesita una canción');

    getLyrics(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <FormField>
        <Label htmlFor='artist'>Escribe el nombre del grupo/artista</Label>
        <Input
        id='artist'
          type="text"
          name="artist"
          value={ artist }
          onChange={ handleInputChange }
        />
      </FormField>
      <FormField>
        <Label htmlFor='song'>Escribe el nombre de la canción</Label>
        <Input
          id='song'
          type="text"
          name="song"
          value={ song }
          onChange={ handleInputChange }
        />
      </FormField>
      <Button>
        Buscar
      </Button>
    </Form>
  )
}
