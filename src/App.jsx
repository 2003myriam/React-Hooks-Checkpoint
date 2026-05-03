import { useState } from 'react'
 
import './App.css'
import MovieList from './components/MovieList';
import Filtre from './components/Filtre';

function App() {
  const [films, setFilms] = useState([
  {
    titre: "Yargı",
    description: "Une série dramatique autour d'une avocate et d'un procureur confrontés à une affaire de meurtre qui bouleverse leurs vies.",
    posterURL: "https://fr.web.img6.acsta.net/r_1280_720/pictures/21/09/10/11/16/5062466.jpg",
    note: 10
  },
  {
    titre: "Teşkilat",
    description: "Une unité secrète des services de renseignement turcs lutte contre des menaces terroristes internes et externes.",
    posterURL: "https://posters.movieposterdb.com/23_03/2021/13562418/l_teskilat-movie-poster_046e02de.jpg",
    note: 8
  },
  {
    titre: "Masumiyet",
    description: "Une histoire dramatique sur une femme qui se retrouve dans une relation toxique avec un homme plus âgé.",
    posterURL: "https://i.pinimg.com/736x/f9/a0/37/f9a037e57f51aeb05352635a25496df9.jpg",
    note: 7
  },
  {
    titre: "Söz",
    description: "Une unité de forces spéciales turques combat le terrorisme et protège le pays au prix de grands sacrifices.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BYWE3YzZjMDUtYTQwYi00YmJlLWFkMjMtMzI2MjI0MThhZDZlXkEyXkFqcGc@._V1_.jpg",
    note: 8
  },
  {
    titre: "Diriliş: Ertuğrul",
    description: "L’histoire épique d’Ertuğrul Bey, père du fondateur de l’Empire ottoman.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZjNhNDRkYzEtYjUzOS00NGEwLTg5NWUtNmZkM2JjYzYzMjI1XkEyXkFqcGc@._V1_.jpg",
    note: 4
  }
]);
 const [minNote, setMinNote] = useState(0)
  const [searchTitle, setSearchTitle] = useState("")

  //  FILTRAGE ICI
  const filteredFilms = films.filter((film) =>
    film.titre.toLowerCase().includes(searchTitle.toLowerCase()) &&
    film.note >= minNote
  )
  return (
    <>
       <Filtre
        setMinNote={setMinNote}
        setSearchTitle={setSearchTitle}
      />

      <MovieList films={filteredFilms} />
    </>
  )
} 

export default App
