import React, {useState, useEffect} from 'react'
import {obtenerEstilistas} from "../services/estilistaService"

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
        <div>
            Estilistas
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
