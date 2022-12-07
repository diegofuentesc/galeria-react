
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.jsx';
import CardImg from './Components/CardImg.jsx';
import SecFooter from './Components/SecFooter.jsx'
import './Style/Style.css';


function App() {
  return (
    <div className="App">
    <Header titulo="Galeria de Imagenes con React"></Header>
    <div className="Card">
    <CardImg imagen="https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg" titulo="Zorro" descripcion="Se encuentra en todo el mundo" boton="Entrar"></CardImg>
    <CardImg imagen="https://cdn.pixabay.com/photo/2015/01/07/11/31/tigers-591359__340.jpg" titulo="Tigre" descripcion="Se encuentran en Asia especialmente en la india" boton="Ingresar"></CardImg>
    <CardImg imagen="https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104__340.jpg" titulo="Leon" descripcion="Habita en las sabanas africanas" boton="Go"></CardImg>
    </div>   
    <div className="footer">
      <SecFooter textoFooter="Este es un ejemplo de react con card que integra imagenes y estilo de bootstrap"></SecFooter>

    
    </div>
    </div>
  );
}

export default App;
