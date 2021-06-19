import React from 'react'
import {Link} from "react-router-dom"

function Agenda({agendas, servicios, estilistas}) {

    const fecha = (ts13)=>{
        let fecha = new Date(parseInt(ts13))
        return fecha.toISOString().slice(0,10)
    }
    // const hora = (ts13)=>{
    //     let fecha = new Date(ts13)
    //     return fecha.getHours().toString()
    // }
    const getNombreServicio = (id_servicio)=>{
        id_servicio = (id_servicio ? id_servicio : "")
        let servicioEncontrado = servicios.find((servicio)=>(servicio.id.toString()===id_servicio.toString()))
        return servicioEncontrado ? servicioEncontrado.nombre : ""
    } 
    const getNombreEstilista = (id_estilista)=>{
        id_estilista = (id_estilista ? id_estilista : "")
        let estilistaEncontrado = estilistas.find((estilista)=>(estilista.id.toString()===id_estilista.toString()))
        return estilistaEncontrado ? estilistaEncontrado.nombre : ""
    }   

    return (
        <div >
            <table className="table table-light table-striped rounded-3 shadow">
                <thead>
                    <tr className="table-dark">
                        <th>Cliente</th>                        
                        <th style={{padding:"8px 0"}}>Fecha</th>
                        <th style={{padding:"8px 0"}}>Hora</th>
                        <th>Servicio</th>
                        <th>Estilista</th>
                        <th style={{padding:"8px 0"}}>Estado</th>
                        <th style={{padding:"8px 0"}}>Detalle</th>
                        <th style={{padding:"8px 0"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {agendas.map((agen, i) => (
                        <tr key={i}>
                            <td>{agen.nombre}</td>                            
                            <td style={{padding:"8px 0"}}>{fecha(agen.fecha)}</td>                            
                            <td style={{padding:"8px 0"}}>{agen.hora}</td>
                            {/* <td>{servicios.filter((servicio)=>{return servicio.id==agen.id_servicio.toString()})[0].nombre}</td>
                            <td>{estilistas.filter((estilista)=>{return estilista.id==agen.id_estilista.toString()})[0].nombre}</td> */}
                            <td>{getNombreServicio(agen.id_servicio)}</td>
                            <td>{getNombreEstilista(agen.id_estilista)}</td>                          
                            <td style={{padding:"8px 0"}}><small className={agen.estado}>{agen.estado}</small></td>
                            <td style={{padding:"8px 0"}}>
                                <Link className="btn btn-outline-primary btn-sm fw-bold" to={`/cita/ver/${agen.id}`}>
                                    Ver
                                </Link>
                            </td>
                            <td style={{padding:"8px 0"}}>
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
