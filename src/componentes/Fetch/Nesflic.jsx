import React, { useEffect, useState } from "react";
import "./Nesflic.css";


const Nesflic = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const APIKEY = "c9f04fa4";

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${busqueda}`)
      .then(res => res.json())
      .then(dat => setPeliculas(dat.Search))
      .catch(err => {
        console.log(err);
      });
  }, [busqueda]);

  const Click = (event) => {
    event.preventDefault();
    setBusqueda(event.target.busqueda.value);
  };

  return (
    <>
        <div className="div_container">
            <h1 className="h1">Netflix</h1>
            <form className="form" onSubmit={Click}>
                <input type="text" name="busqueda" />
                <button className="btn" type="submit">Buscar</button>
            </form>
        </div>
      <ul className="ul">
        {peliculas === undefined
          ? 'Película no disponible'
          : peliculas.map((peli) => (
              <li className="li" key={peli.imdbID}>
                <img className="img" src={peli.Poster} alt="" />
                {peli.Title}
              </li>
            ))}
      </ul>
    </>
  );
};

export default Nesflic;
