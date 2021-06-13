import React, {useState, useEffect} from 'react'
import {obtenerServicios} from "../services/servicioService"

function ProductoView() {
    const [servicios, setServicios] = useState([])
    const getServicios = async()=>{
        try {
            const serviciosObtenidos = await obtenerServicios()            
            setServicios(serviciosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getServicios()
    }, [])

    return (
        <div>
            Servicios
            <table className="table">
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Precio</th>
                        <th>Foto</th>
                        <th>Descripcion</th>                                           
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((serv, i) => (
                        <tr key={i}>
                            <td>{serv.nombre}</td>
                            <td>{serv.precio}</td>
                            <td>{serv.foto}</td>
                            <td>{serv.descripcion}</td>                                                      
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductoView
