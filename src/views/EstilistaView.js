import React, {useState, useEffect} from 'react'
import {obtenerEstilistas} from "../services/estilistaService"
import {Link} from 'react-router-dom'

function EstilistaView() {
    const [estilistas, setEstilistas] = useState([])
    const getEstilistas = async()=>{
        try {
            const estilistasObtenidas = await obtenerEstilistas()            
            setEstilistas(estilistasObtenidas)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEstilistas()
    }, [])

    return (
        <div className="px-2">
            <p className="bg-primary text-white fs-5 fw-bold py-2 my-1 rounded-3 shadow">Estilistas</p>          
            <hr/>
            <div className="d-flex justify-content-between my-1">                
                <Link className="btn btn-outline-success fw-bold px-5" to={`/cita/crear`}>Crear Estilista</Link>
            </div>            
            {/* {loadA ? (<p>Obteniendo Informacion...</p>) : (
                <Agenda agendas={agendas} servicios={servicios} estilistas={estilistas}/>
            )} */}

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Foto</th>
                        <th>Servicios</th>
                        <th>Positivo</th>
                        <th>Negativo</th>                                           
                    </tr>
                </thead>
                <tbody>
                    {estilistas.map((esti, i) => (
                        <tr key={i}>
                            <td>{esti.nombre}</td>
                            <td>{esti.foto}</td>
                            <td>{esti.servicios}</td>
                            <td>{esti.positivo}</td>
                            <td>{esti.negativo}</td>                                                   
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EstilistaView
