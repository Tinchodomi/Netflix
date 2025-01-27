
import {useState,useEffect} from 'react'


const Contador = ({stock, inicial}) => {
    
    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState('black')
    
    
   
    document.title = `Contador ${contador}`
    
    const agregarAlcarrito = () =>{

        console.log(`Agregado ${contador} items`)

    } 


    const aumentarContador = () => {

        if (contador < stock) {
             
        setContador(contador + 1)

        }
    }

    const disminuirContador = () => {
        
        if (contador > inicial) {
            
            setContador(contador - 1)

        }
    }


    useEffect( ()=>{
        if(contador > 5){
           
            setColor('red')
        }
        else{

            setColor('black')
        }

    }, [contador])



    return (
    <div>
        <button onClick={disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> + </button>
        <br /> <br />
        <button style={{color:color}} onClick={agregarAlcarrito}>Agregar al carrito</button>
   
    </div>
  )
}

export default Contador