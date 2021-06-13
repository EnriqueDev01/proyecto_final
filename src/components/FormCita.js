import React from 'react'
import { useForm } from "react-hook-form";

function FormCita({tipo, agenda, servicios, estilistas, manejarSubmit}) {    
    const {register, handleSubmit, formState: { errors }} = useForm();
    
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

    
    const recibirSubmit = (datos) => {        
        datos = {...datos,fecha:(fechaGetTime(datos.fecha))}
        // console.log(datos);
        manejarSubmit(datos)
      };    
    // agenda.id ? (console.log(tipo,"- SI existe agenda")) : (console.log(tipo,"- NO existe agenda"))

    return (
        <div>
            <form className="bg-light p-3" onSubmit={handleSubmit(recibirSubmit)}>
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Cliente</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={agenda.nombre} {...register("nombre", { required: true })}/>
                    </div>                    
                </div>
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Correo</label>
                    <div className="col-sm-9">
                        <input type="email" className="form-control" defaultValue={agenda.correo} {...register("correo")}/>
                    </div>                                      
                </div>                
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Fecha</label>
                    <div className="col-sm-4">
                        <input type="date" className="form-control" defaultValue={fechaString(agenda.fecha)} id="fe" {...register("fecha", { required: true })}/>
                    </div>    
                    <label className="form-label col-sm-2 mt-1 text-end">Hora</label>
                    <div className="col-sm-3">
                        <input type="number" className="form-control" defaultValue={agenda.hora} {...register("hora", { required: true })}/>
                    </div>                                   
                </div>                
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Servicio</label>
                    <div className="col-sm-9">
                        <select className="form-select" name="id_servicio" defaultValue={agenda.id_servicio} {...register("id_servicio", { required: true })}>
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
                        <select className="form-select" name="id_estilista" defaultValue={agenda.id_estilista} {...register("id_estilista", { required: true })}>
                            <option selected disabled value="">Seleccione Una Opcion</option>
                            {estilistas.map((est, i)=>(
                                <option key={i} value={est.id}>{est.nombre}</option>
                            ))}                        
                        </select>
                    </div>                                  
                </div>
                
                <div className="row pt-2">
                    <label className="form-label col-sm-2 mt-1 text-end">Estado</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" defaultValue={agenda.estado} {...register("estado", { required: true })}/>
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
