import {BrowserRouter as Router, Switch} from "react-router-dom"
import Navegacion from "./components/Navegacion"
import Routes from "./Routes"

function App() {
  return (
    <div className="container d-flex text-center" style={{minWidth:'1080px', width:'1080px', minHeight:'600px'}}>
      <Router>
        <div id="panel-navegacion" style={{width:'160px'}}>
          <Navegacion/>
        </div>
        <div id="panel-contenido" style={{width:'920px'}}>
          {/* contenido */}
          <Switch>
            <Routes />
          </Switch>
        </div>       
      </Router>      
    </div>
  );
}

export default App;
