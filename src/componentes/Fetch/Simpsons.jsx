import { useState, useEffect } from "react";

const Simpsons = () => {
  const [personaje, setPersonaje] = useState([]);

  /* useEffect( ()=> {

        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
        .then(respuesta=>respuesta.json())
        .then(data=>setPersonaje(data))
        .catch(err=>console.error(err)) 

       
    },[]) *//////FETCH CON THEN Y CATCH

  useEffect(() => {
    const pedirPersonaje = async () => {
      try {
        const res = await fetch(
          "https://thesimpsonsquoteapi.glitch.me/quotes?count=num"
        );
        const dat = await res.json();
        setPersonaje(dat);
      } catch (err) {
        console.log(err);
      }
    };

    pedirPersonaje();
  }, [personaje]);

  return (
    <div>
      <h1>Simpsons</h1>
      {personaje.map((personaje, index) => {
        return (
          <div key={index}>
            <p>{personaje.character}</p>
            <img width="25%" src={personaje.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Simpsons;
