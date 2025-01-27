import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nesflic from "./componentes/Fetch/Nesflic";


function App() {
   
  


  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nesflic/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;






///local STORAGE

//const messi =
//"https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg";

/*  localStorage.setItem("Empresa", "Netflic SA");
  localStorage.setItem("CUIT", 30223432359);
  localStorage.setItem("Domicilio", "AV. Respuela 36");

  let recupero_dato = localStorage.getItem("CUIT");
  console.log(recupero_dato);

  const peli_fav = {
    Nombre: "El señor de los anillos",
    Año: 2005,
  };
  ///paso objeto a JSON para localstorage
  const peli_fav_json = JSON.stringify(peli_fav);
  console.log(peli_fav_json);
  //lo guardo en el localstorage
  localStorage.setItem("peli_fav", peli_fav_json);

  ////paso JSON a objeto para sacar del storage
  const nueva_peli = localStorage.getItem("peli_fav");
  const nueva_peli_fav = JSON.parse(nueva_peli);
  console.log(nueva_peli_fav);
 */
