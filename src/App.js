import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { SearchForm } from "./components/form/SearchForm";
import { Container, GlobalStyle, LyricsContainer, LyricsP, Title } from "./styles";

function App() {
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
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        const body = await res.json();
        const lyrics = body.lyrics.split('\n\n\n');
        return setData({
          ...data,
          lyrics,
          loading: false
        });
      }
      setData({
        ...data,
        loading: false
      });
      toast.error('Canción no encontrada');
    } catch (error) {
      setData({
        ...data,
        loading: false
      });
      toast.error('Error');
    }
  }

  if (loading) return <LoadingScreen />

  return (
    <Container>
      <GlobalStyle />
      <ToastContainer />
      <Title>Get The Lyrics</Title>
      <SearchForm getLyrics={ getLyrics } />
      <LyricsContainer>
        {
          lyrics &&
          lyrics.map((p, index) => (
            <LyricsP key={ index }>{ p }</LyricsP>
          ))
        }
      </LyricsContainer>
    </Container>
  );
}

export default App;
