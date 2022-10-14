import Header from "./Component/Header";
import Search from "./Component/Search";
import Movie from "./Component/Movie";
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://www.omdbapi.com/?apikey=c2d93f7d&s=man";
  useEffect(()=>{
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
          console.log('default fetch');
          // console.log(res);
          setState(res.Search);
          setLoading(false);
      })
  },[]);
  const search = (searchValue)=>{
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log("fetch successfully");
          setState(jsonResponse.Search);
          setLoading(false);
        } else {
          console.log("fetch failed");
          setError(jsonResponse.Error);
          setLoading(false);
        }
      });
  }
  return (
    <div>
      <Header />
      <Search search={search} />
      <div className="movies">
        {loading && !error ? (
         <span>loading...</span>
         ) : error ? (
          <div className="errorMessage">{error}</div>
        ) : (
          state.map((m, index) => (
            <Movie key={index} movie={m} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
