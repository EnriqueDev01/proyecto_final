import React, {useState, useEffect} from 'react'
import {obtenerAgendas} from "../services/agendaService"
import {obtenerServicios} from "../services/servicioService"
import {obtenerEstilistas} from "../services/estilistaService"
import Agenda from '../components/Agenda'
import {Link} from "react-router-dom"

function AgendaView() {
    const [agendas, setAgendas] = useState([])
    const [servicios, setServicios] = useState([])
    const [estilistas, setEstilistas] = useState([])
    const [loadA, setLoadA] = useState(true)

    const getAgendas = async()=>{
        try {
            const agendasObtenidas = await obtenerAgendas()            
            setAgendas(agendasObtenidas)
        } catch (error) {
            console.log(error)
        }
    }
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

    useEffect(async () => {
        await getServicios()
        await getEstilistas()
        await getAgendas()
        setLoadA(false)
    }, [])

    return (
        <div>
            Agenda            
            <hr/>
            <Link className="btn btn-success fw-bold" to={`/cita/crear`}>
                Crear Cita
            </Link>
            {loadA ? (<p>Obteniendo Informacion...</p>) : (
                <Agenda agendas={agendas} servicios={servicios} estilistas={estilistas}/>
            )}            
        </div>
    )
}

export default AgendaView
