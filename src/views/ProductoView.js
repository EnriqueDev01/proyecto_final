import React, {useState, useEffect} from 'react'
import {obtenerServicios, crearServicio, editarServicio} from "../services/servicioService"
import FormServicio from '../components/FormServicio'
import Swal from "sweetalert2";
import GroupServicios from '../components/GroupServicios';

function ProductoView() {
    const [servicios, setServicios] = useState([])
    const [servicio, setServicio] = useState({})
    const [tipo, setTipo] = useState("")    
    const [formVisible, SetFormVisible] = useState(false)    

    const getServicios = async()=>{
        try {
            const serviciosObtenidos = await obtenerServicios()            
            setServicios(serviciosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    const manejarBoton = (e,accion,servicio)=>{
        e.preventDefault()        
        setServicio(servicio)
        setTipo(accion)                
        SetFormVisible(true)    
    }

    const manejarSubmit = async (datosServicio)=>{
        if (datosServicio) {            
            switch (tipo) {
                case "crear":
                    try {
                        await crearServicio(datosServicio)
                        await Swal.fire({
                          icon:'success',
                          title:'Servicio Creado',
                          showConfirmButton:false,
                          timer:2000
                        })                    
                    } catch (error) {
                        console.log(error)
                    }
                    break;
                case "editar":
                    try {
                        await editarServicio(datosServicio, servicio.id)
                        await Swal.fire({
                          icon:'success',
                          title:'Servicio Modificado',
                          showConfirmButton:false,
                          timer:2000
                        })                    
                    } catch (error) {
                        console.log(error)
                    }
                    break;                
                default:
                    break;
            }                    
        }         
        SetFormVisible(false)        
    }

    useEffect(() => {
        getServicios()
    }, [formVisible])    

    return (
        <div className="px-2 position-relative">
            <p className="bg-primary text-white fs-5 fw-bold py-2 my-1 rounded-3 shadow">Servicios</p>          
            <hr className="my-2"/>
            <div className="d-flex justify-content-between my-1">               
                <button className="btn btn-outline-success fw-bold px-5" onClick={(e) => {manejarBoton(e,"crear",{})}}>Crear Servicio</button>
            </div>
            <hr className="my-2"/>
            <GroupServicios servicios={servicios} manejarBoton={manejarBoton}/>

            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Precio</th>
                        <th>Foto</th>
                        <th>Descripcion</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((serv, i) => (
                        <tr key={i}>
                            <td>{serv.nombre}</td>
                            <td>{serv.precio}</td>
                            <td>{serv.foto}</td>
                            <td>{serv.descripcion}</td>
                            <td>
                                <button className="btn btn-outline-warning btn-sm fw-bold" onClick={(e)=>{manejarBoton(e,"editar",serv)}}>
                                    Editar
                                </button>
                            </td>
                        </tr>                        
                    ))}
                </tbody>
            </table> */}
            {!formVisible ? ("") : (
                <div 
                    className="position-absolute" 
                    style={{width:'360px',height:'400px',right:'0',top:'120px'}}
                >
                    <FormServicio tipo={tipo} servicio={servicio} manejarSubmit={manejarSubmit}/>
                </div>
            )}              
        </div>
    )
}

export default ProductoView
