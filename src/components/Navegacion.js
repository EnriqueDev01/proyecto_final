import React from 'react'
import Botonnav from "./Botonnav"
import logo from "./logo_240_100.png"

function Navegacion() {
    return (
        <div>            
            <img src={logo} className="my-3" style={{width:"140px"}} alt="logo"/>
            <Botonnav 
                icon={"far fa-chart-bar fa-2x"} 
                textBoton={"Dashboard"} 
                route={""}                
            />
            <Botonnav 
                icon={"far fa-calendar-alt fa-2x"} 
                textBoton={"Agenda"} 
                route={"agenda"}
            />
            {/* <Botonnav 
                icon={"far fa-user fa-2x"} 
                textBoton={"Clientes"} 
                route={"cliente"}
            /> */}
            <Botonnav 
                icon={"fas fa-vest fa-2x"} 
                textBoton={"Estilistas"} 
                route={"estilista"}
            />
            <Botonnav 
                icon={"fas fa-store fa-2x"} 
                textBoton={"Productos"} 
                route={"producto"}
            />
        </div>
    )
}
export default Navegacion
