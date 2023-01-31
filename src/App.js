import "./App.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
        <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      ,
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />,
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />,
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />,
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />,
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />,
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />,
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />,
    </div>
  );
}

export default App;

//https://netflix-clone-project-68320.web.app ///my deployment link