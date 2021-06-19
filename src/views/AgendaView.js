import React, {useState, useEffect} from 'react'
import {obtenerAgendas} from "../services/agendaService"
import {obtenerServicios} from "../services/servicioService"
import {obtenerEstilistas} from "../services/estilistaService"
import Agenda from '../components/Agenda'
import {Link} from "react-router-dom"

function AgendaView() {
    //------------------------------------
    // const history = useHistory()
    // const reload = ()=>{
    //     history.go(0)
    // }
    //-----------------------------------
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

    useEffect(() => {
        async function getAll(){
            await getServicios()
            await getEstilistas()
            await getAgendas()
            setLoadA(false)
        } 
        getAll()
    }, [])

    return (
        <div className="px-2">
            <p className="bg-primary text-white fs-5 fw-bold py-2 my-1 rounded-3 shadow">Agenda</p>          
            <hr className="my-2"/>
            <div className="d-flex justify-content-between my-1">
                {/* <div className="d-flex">
                    <input type="date" className="form-control px-5" style={{width:'220px'}}/>
                    <button className="btn btn-outline-primary fw-bold px-5 ms-2" onClick={reload}>Buscar</button>
                </div> */}
                <Link className="btn btn-outline-success fw-bold px-5" to={`/cita/crear`}>Crear Cita</Link>
            </div>
            <hr className="my-2"/>          
            {loadA ? (<p>Obteniendo Informacion...</p>) : (
                <Agenda agendas={agendas} servicios={servicios} estilistas={estilistas}/>
            )}            
        </div>
    )
}

export default AgendaView
