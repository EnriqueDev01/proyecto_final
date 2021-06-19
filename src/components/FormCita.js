import React from 'react'
import { useForm } from "react-hook-form";

function FormCita({tipo, agenda, servicios, estilistas, manejarSubmit}) {    
    const {register, handleSubmit, formState: { errors }} = useForm();
    const estados = ["pendiente","confirmado","cancelado","atendido"]    
    
    let btnText = "-"
    let btnClass = ""
    switch (tipo) {
        case "crear":
            btnText = "Agendar"
            btnClass = "btn-success"
            break;
        case "ver":
            btnText = "Cerrar"
            btnClass = "btn-primary"
            break;
        case "editar":
            btnText = "Guardar"
            btnClass = "btn-warning"
            break;
        default:
            break;
    }

    const fechaString = (ts13)=>{
        if (ts13) {
            let fecha = new Date(parseInt(ts13))    
            return fecha.toISOString().slice(0,10)
        } else {
            return""
        }        
    }
    const fechaGetTime = (fechaIso)=>{
        let fecha = new Date(fechaIso)
        return fecha.getTime().toString()
    }
    const validarIdServicio = (id_servicio)=>{
        id_servicio = (id_servicio ? id_servicio : "")
        let servicioEncontrado = servicios.find((servicio)=>(servicio.id.toString()===id_servicio.toString()))
        return servicioEncontrado ? servicioEncontrado.id : ""
    }
    const validarIdEstilista = (id_estilista)=>{
        id_estilista = (id_estilista ? id_estilista : "")
        let estilistaEncontrado = estilistas.find((estilista)=>(estilista.id.toString()===id_estilista.toString()))
        return estilistaEncontrado ? estilistaEncontrado.id : ""
    }
    
    const recibirSubmit = (datos) => {        
        datos = {...datos,fecha:(fechaGetTime(datos.fecha))}
        // console.log(datos);
        manejarSubmit(datos)
    };    
    // agenda.id ? (console.log(tipo,"- SI existe agenda")) : (console.log(tipo,"- NO existe agenda"))

    return (
        <div>
            <form className="bg-light p-3 mt-4 rounded-3 shadow" onSubmit={handleSubmit(recibirSubmit)}>
                <div className="row pt-3">
                    <label className="form-label col-sm-2 mt-1 text-end">Cliente</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={agenda.nombre} {...register("nombre", { required: true })}/>
                    </div>                    
                </div>
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Correo</label>
                    <div className="col-sm-9">
                        <input type={(tipo==="ver")?("text"):("email")} className="form-control" defaultValue={agenda.correo} {...register("correo",{ required: true})}/>
                    </div>                                      
                </div>                
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Fecha</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" defaultValue={fechaString(agenda.fecha)} {...register("fecha", { required: true })}/>
                    </div>    
                    <label className="form-label col-sm-2 mt-1 text-end">Hora</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" defaultValue={agenda.hora} {...register("hora", { required: true })}/>
                    </div>                                   
                </div>                
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Servicio</label>
                    <div className="col-sm-9">
                        <select className="form-select" name="id_servicio" defaultValue={validarIdServicio(agenda.id_servicio)} {...register("id_servicio", { required: ((tipo==="ver")?(false):(true))})}>
                            {console.log("agenda.id_servicio:",agenda.id_servicio)}
                            <option selected disabled value="">Seleccione Una Opcion</option>
                            {servicios.map((ser, i)=>(
                                <option key={i} value={ser.id}>{ser.nombre}</option>
                            ))}
                        </select> 
                    </div>                                  
                </div>               
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Estilista</label>
                    <div className="col-sm-9">
                        <select className="form-select" name="id_estilista" defaultValue={validarIdEstilista(agenda.id_estilista)} {...register("id_estilista")}>
                            <option selected disabled value="">Seleccione Una Opcion</option>
                            {estilistas.map((est, i)=>(
                                <option key={i} value={est.id}>{est.nombre}</option>
                            ))}                        
                        </select>
                    </div>                                  
                </div>                
                {/* <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Estado</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={agenda.estado} {...register("estado", { required: true })}/>
                    </div>                                  
                </div> */}
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Estado</label>
                    <div className="col-sm-9">
                        <select className="form-select" name="estado" defaultValue={agenda.estado?agenda.estado:"pendiente"} {...register("estado")}>
                            {/* <option selected  value="">Seleccione Una Opcion</option> */}
                            {estados.map((estado, i)=>(
                                <option key={i} value={estado}>{estado}</option>
                            ))}                        
                        </select>
                    </div>                                  
                </div>
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Descripcion</label>
                    <div className="col-sm-9">
                        <textarea className="form-control" rows="2" defaultValue={agenda.descripcion} {...register("descripcion")}></textarea>
                    </div>                                  
                </div>
                <button type="submit" className={`btn ${btnClass} col-3 mx-auto fw-bold mt-2`}>
                    {btnText}
                </button>
            </form>            
        </div>
    )
}

export default FormCita
