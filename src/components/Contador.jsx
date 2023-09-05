import React from 'react'

const Contador = (props) => {
  return(
    <div className='col-auto text-center'>
        <div className='border d-inline-block p-2 shadow-lg'>
          <h3>Contador: {props.count}</h3>
          <button className='m-2 btn btn-success' onClick={props.incrementar}>Incrementar</button>
          <button className='m-2 btn btn-primary' onClick={props.decrementar}>Decrementar</button>
          <button className='m-2 btn btn-danger'onClick={props.reset}>Reiniciar Contador</button>
        </div>
    </div>
  )
}

export default Contador