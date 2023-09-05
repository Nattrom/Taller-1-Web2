import React from 'react'

const Card = (props) => {
  const pilotos = [
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png',
      title: 'Max Verstappen', text: 'Piloto de formula 1 del Equipo Red Bull Racing.'},
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png', 
      title: 'Sergio Perez', text: 'Piloto de Formula 1 del Equipo Red Bull Racing.'},
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png', 
      title: 'Fernando Alonso', text: 'Piloto Español de Formula 1 del equipo Aston Martin .'},
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png', 
      title: 'Lewis Hamilton', text: 'Piloto de Formula 1 del equipo Mercedes.'},
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png', 
      title: 'Carlos Sainz', text: 'Piloto de Formula 1 del equipo Ferrari.'},
    { imagen: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png', 
      title: 'Charles Lecrerc', text: 'Piloto de Formula 1 del equipo Ferrari.'}
  ]

  return (
    <div className="container mt-4">
      <div className="row">
      {pilotos.map((personaje, index) => (
        <div className='col-md-6 col-sm-6 mb-3 col-lg-4' key={index}>
          <div className="card shadow-lg zoom-on-hover">
          <img className='card-img-top' src={personaje.imagen} alt="" />
          <div className='card-body'>
              <div className="d-flex justify-content-between">
                <h4 className='card-title'>{personaje.title} </h4>
                <p className='count'>Contador: {props.count}</p>
              </div>
              <p className='card-text'>{personaje.text}</p>
              <button className="btn btn-primary">Mas detalles...</button>
          </div>
        </div>
      </div>
      ))}  
    </div>
    </div>
  ) 
  
}

export default Card