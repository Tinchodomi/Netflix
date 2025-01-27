import {useRef} from 'react'

const UseRefDom = () => {
    
    const ref = useRef(null)

    const handleclick = () => {

        if(ref.current){

          ref.current.textContent = 'modificado'  

        }

    }
    
    return (
    <div>
      <h3> UseRef DOM</h3>
      <p ref={ref}>texto a modificar</p>
      <button onClick={handleclick}>Click para modificar el DOM</button>
    </div>
  )
}

export default UseRefDom
