import React, {useState, useEffect} from 'react'
import BarWeek from '../components/BarWeek'
import DougTotal from '../components/DougTotal'
import {obtenerAgendas} from "../services/agendaService"
// import {obtenerServicios} from "../services/servicioService"
// import {obtenerEstilistas} from "../services/estilistaService"

function DashboardView() {
    const [qEstados,setQEstados]=useState([])

    let dataEstados=[12, 19, 3, 5]//qEstados
    let labelsEstados=['Atendidos', 'Confirmados', 'Pendientes', 'Cancelados']
    let bgcolorEstados=['rgba(158, 158, 158, 0.4)','rgba(28, 188, 28, 0.4)','rgba(248, 178, 28, 0.4)','rgba(208, 28, 28, 0.4)']
    let titleEstados="Q Estado Citas"

    let dataServicios=[12, 19, 3, 5, 2, 3, 5, 6, 8, 4]
    let labelsServicios=['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','xxxx', 'yyyyy']
    let titleServicios="Q Servicios Agendados"
    let titleEstilistas="Q Estilistas Agendados"

    const [agendas, setAgendas] = useState([])
    // const [servicios, setServicios] = useState([])
    // const [estilistas, setEstilistas] = useState([])
    const [loadD, setLoadD] = useState(true)

    const getAgendas = async()=>{
        try {
            const agendasObtenidas = await obtenerAgendas()            
            setAgendas(agendasObtenidas)                      
        } catch (error) {
            console.log(error)
        }
    }
    // const getServicios = async()=>{
    //     try {
    //         const serviciosObtenidos = await obtenerServicios()            
    //         setServicios(serviciosObtenidos)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // const getEstilistas = async()=>{
    //     try {
    //         const estilistasObtenidos = await obtenerEstilistas()            
    //         setEstilistas(estilistasObtenidos)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const obtenerQEstados = (agen)=>{
        // console.log("agen",agen)
        let qAtendidos = agen.filter((elem)=>(elem.estado==="atendido")).length
        let qConfirmados = agen.filter((elem)=>(elem.estado==="confirmado")).length
        let qPendientes = agen.filter((elem)=>(elem.estado==="pendiente")).length
        let qCancelados = agen.filter((elem)=>(elem.estado==="cancelado")).length
        setQEstados([qAtendidos,qConfirmados,qPendientes,qCancelados])
        // console.log("qEstados",qEstados)       
        // setLoadD(false)      
    }

    useEffect(() => {
        async function getAll2(){
            async function getAll(){
                // await getServicios()
                // await getEstilistas()
                await getAgendas()
                // setLoadD(false)
                // console.log("esperando agendas...")
                // console.log("agendas",agendas)
                // console.log("loadD-1",loadD)
                // obtenerQEstados(agendas)
            } 
            await getAll() 
            obtenerQEstados(agendas) 
        }
        getAll2()
        setLoadD(false) 
        console.log("loadD-2",loadD)        
    }, [])

    return (
        <div className="px-2">
            <p className="bg-primary text-white fs-5 fw-bold py-2 my-1 rounded shadow">Dashboard</p>          
            <hr className="my-2"/>
            {loadD ? (<p>Obteniendo Informacion...</p>) : (
                <div className="bg-light py-2 rounded shadow">
                    <div className="d-flex justify-content-around">
                        <DougTotal dataChart={dataEstados} labelsChart={labelsEstados} bgcolorChart={bgcolorEstados} titleChart={titleEstados}/>
                        <DougTotal dataChart={dataServicios} labelsChart={labelsServicios} titleChart={titleServicios}/>
                        <DougTotal dataChart={dataServicios} labelsChart={labelsServicios} titleChart={titleEstilistas}/>
                    </div>
                    <div className="mt-3 ms-5">
                        <BarWeek />
                    </div>
                </div>
            )}                        
        </div>
    )
}

export default DashboardView
