
import {useState,useEffect} from 'react'

const Categorias = () => {
  
  const [categoria, setCategoria] = useState("");
  

  useEffect(() => {

    document.title = categoria

  }, [categoria])


  const handleClick = (categoria) => {

    setCategoria(categoria)

  }

  return (
    <div>

      <h2>Categoria de producto</h2>
      <button onClick={()=> handleClick('Frutas')}> Frutas </button>
      <button onClick={() => handleClick('Verduras')}> Verduras </button>
      <button onClick={()=> handleClick('Carnes') }>Carnes</button>
      <button onClick={()=> handleClick('Lacteos')}> Lacteos </button>

    </div>
  )
}

export default Categorias