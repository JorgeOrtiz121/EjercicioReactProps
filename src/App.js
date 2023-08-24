import './estilos/estilosjuegos.css';
import Videojuegos from './componentes/Videojuegos';

function App() {
  return (
    <div className="App">
      <h2>Estos son los juegos que me han gustado mucho</h2>
     <Videojuegos className="cod"
     nombre='Call of Duty Modern Warfare' 
     contenido='Call of Duty: Modern Warfare es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Es el decimosexto juego de la saga Call of Duty y es un reinicio de la serie Modern Warfare.'
     imagen='Call-of-Duty-Modern-Warfare-1-portada-1000x600.jpg'
     url='https://www.callofduty.com/es/modernwarfare'
     />
    
    <Videojuegos
    nombre='DOOM' 
    contenido='La franquicia Doom es una serie de videojuegos de disparos en primera persona desarrollados por id Software. Esta franquicia incluye novelas, cómics, juegos de mesa y adaptaciones cinematográficas. La serie se centra en las hazañas de un marine espacial no identificado que opera bajo las órdenes de la Union Aerospace Corporation, que lucha contra hordas de demonios y no muertos en el inframundo y la Tierra, protagonizando diversos viajes por portales entre ambos mundos.'
    imagen='header.jpg'
    url='https://bethesda.net/zh-TW/game/doom-2016'
    />

<Videojuegos
    nombre='Ace Combat' 
    contenido='Ace Combat presenta su enésima entrega con Assault Horizon, el nuevo episodio de la serie que los chicos de Project Aces han desarrollado para Namco. Combate aéreo arcade de lo más espectacular para un videojuego que está a la altura de lo que esta veterana franquicia siempre ha demostrado.'
    imagen='acecombatkyle1.jpg'
    url='https://es.bandainamcoent.eu/ace-combat/ace-combat-7-skies-unknown'
    />
   </div>
  );
}

export default App;
