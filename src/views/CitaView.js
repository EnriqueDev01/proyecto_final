import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom"
import {obtenerServicios} from "../services/servicioService"
import {obtenerEstilistas} from "../services/estilistaService"
import {obtenerAgendaPorId, crearAgenda, editarAgenda} from "../services/agendaService"
import FormCita from '../components/FormCita'
import Swal from "sweetalert2";

function CitaView() {
    let {tipo, id} = useParams();
    id = id ? parseInt(id) : 0
    
    const [servicios, setServicios] = useState([])
    const [estilistas, setEstilistas] = useState([])
    const [agenda, setAgenda] = useState({})
    const [loadC, setLoadC] = useState(true)
    const history = useHistory()

    const getServicios = async()=>{
        try {
            const serviciosObtenidos = await obtenerServicios()            
            setServicios(serviciosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }
    const getEstilistas = async()=>{
        try {
            const estilistasObtenidos = await obtenerEstilistas()            
            setEstilistas(estilistasObtenidos)
        } catch (error) {
            console.log(error)
        }
    }
    const getAgendaPorId = async(idAgenda)=>{
        try {            
            if (idAgenda>0) {                
                const agendaObtenida = await obtenerAgendaPorId(idAgenda)
                setAgenda(agendaObtenida)                
            }            
        } catch (error) {
            console.log(error)
        }
    }
    const manejarSubmit = async(datos)=>{        
        console.log("desde el formulario")
        console.log(datos)
        console.log(id)
        switch (tipo) {
            case "crear":
                try {
                    await crearAgenda(datos)
                    await Swal.fire({
                      icon:'success',
                      title:'Agendado Creada',
                      showConfirmButton:false,
                      timer:2000
                    })                    
                } catch (error) {
                    console.log(error)
                }
                break;
            case "editar":
                try {
                    await editarAgenda(datos, id)
                    await Swal.fire({
                      icon:'success',
                      title:'Agenda Modificada',
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
        history.push("/agenda/")
    }

    useEffect(async() => { 
        await getServicios()       
        await getEstilistas()
        await getAgendaPorId(id)
        setLoadC(false)            
    }, [])

    return (
        <div className="container">
            <p className="bg-primary text-white fw-bold">Cita</p>
            <p><span className="bg-success text-white fw-bold p-2">Tipo formulario:</span> {tipo}</p>
            <p><span className="bg-success text-white fw-bold p-2">id formulario:</span> {id} </p>
            <hr /> 
            {loadC ? (<p>Obteniendo Informacion...</p>) : (
                <FormCita 
                    tipo={tipo} 
                    agenda={agenda} 
                    servicios={servicios} 
                    estilistas={estilistas} 
                    manejarSubmit={manejarSubmit}
                />
            )}            
        </div>
    )
}

export default CitaView
