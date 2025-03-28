import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./componentes/header/Header.jsx";
import Projeto from './componentes/projetos/Projeto.jsx';
import Inicio from "./componentes/inicio/Inicio.jsx";
import Contato from "./componentes/contato/Contato.jsx";

export default function App() {

  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Projeto />
        <Contato/>
      </main>
    </>
  )
}


