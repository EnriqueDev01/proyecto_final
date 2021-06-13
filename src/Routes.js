import {Route} from "react-router-dom"
import DashboardView from "./views/DashboardView"
import AgendaView from "./views/AgendaView"
// import ClienteView from "./views/ClienteView"
import EstilistaView from "./views/EstilistaView"
import ProductoView from "./views/ProductoView"
import CitaView from "./views/CitaView"

function Routes() {
    return (
        <div>
            <Route path="/" exact component={DashboardView} />
            <Route path="/agenda/" exact component={AgendaView} />
            <Route path="/cita/:tipo/:id?" exact component={CitaView} />            
            {/* <Route path="/cliente/" exact component={ClienteView} /> */}
            <Route path="/estilista/" exact component={EstilistaView} />
            <Route path="/producto/" exact component={ProductoView} />
        </div>
    )
}

export default Routes
