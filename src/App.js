import {BrowserRouter as Router, Switch} from "react-router-dom"
import Navegacion from "./components/Navegacion"
import Routes from "./Routes"

function App() {
  return (
    <div className="container d-flex text-center" style={{minWidth:'960px', width:'960px', height:'600px'}}>
      <Router>
        <div id="panel-navegacion" className="col-2">
          <Navegacion/>
        </div>
        <div id="panel-contenido" className="col-10">
          contenido
          <Switch>
            <Routes />
          </Switch>
        </div>       
      </Router>      
    </div>
  );
}

export default App;
