import React from 'react'
import '../estilos/estilosjuegos.css';


function Videojuegos(props) {
    return ( 
    <div className='Contenedor-Videojuegos'>
        <a href={props.url} target='_blank'>
        <div className='imagenprincipal'>
        <img className='imagenes' src={require(`../imagenes/${props.imagen}`)} />
        </div>
        </a>
      
     <div className='Contenido'>
      <p className='tip'>Este juego se llama {props.nombre} </p>
     
     </div>
     <div className='parrafo2'>
     <p className='des'>{props.contenido}</p>
     </div>
    </div> 
    );
}

export default Videojuegos;