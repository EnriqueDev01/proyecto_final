import React from 'react'
import {Link} from "react-router-dom"

function Agenda({agendas, servicios, estilistas}) {

    const fecha = (ts13)=>{
        let fecha = new Date(parseInt(ts13))
        return fecha.toISOString().slice(0,10)
    }
    const hora = (ts13)=>{
        let fecha = new Date(ts13)
        return fecha.getHours().toString()
    }   

    return (
        <div>
            <table className="table table-light table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Cliente</th>                        
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Servicio</th>
                        <th>Estilista</th>
                        <th>Estado</th>
                        <th>Detalle</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {agendas.map((agen, i) => (
                        <tr key={i}>
                            <td>{agen.nombre}</td>                            
                            <td>{fecha(agen.fecha)}</td>                            
                            <td>{hora(agen.fecha)}-{agen.hora}</td>
                            <td>{servicios.filter((servicio)=>{return servicio.id==agen.id_servicio.toString()})[0].nombre}</td>
                            <td>{estilistas.filter((estilista)=>{return estilista.id==agen.id_estilista.toString()})[0].nombre}</td>                            
                            <td><small className={agen.estado}>{agen.estado}</small></td>
                            <td>
                                <Link className="btn btn-outline-primary btn-sm fw-bold" to={`/cita/ver/${agen.id}`}>
                                    Ver
                                </Link>
                            </td>
                            <td>
                                <Link className="btn btn-outline-warning btn-sm fw-bold" to={`/cita/editar/${agen.id}`}>
                                    Editar
                                </Link>
                            </td>                       
                        </tr>
                    ))}
                </tbody>
            </table>            
        </div>
    )
}

export default Agenda
