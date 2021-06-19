import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import {subirArchivo} from "../services/servicioService"

function FormServicio({tipo, servicio, manejarSubmit}) {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [loadI, setLoadI] = useState(false)
        
    let fileImagen = null

    let btnText = ""
    let btnClass = ""
    switch (tipo) {
        case "crear":
            btnText = "Crear"
            btnClass = "btn-success"
            break;        
        case "editar":
            btnText = "Guardar"
            btnClass = "btn-warning"
            break;
        default:
            break;
    }    
    
    const recibirSubmit = async (datos) => {                        
        if (fileImagen) {
            setLoadI(true)
            let urlImagen = await subirImagen(fileImagen)
            datos = {...datos,foto:urlImagen}
        }        
        manejarSubmit(datos)        
    }
    const cancelar = (e) => { 
        e.preventDefault()        
        manejarSubmit()
    }
    const subirImagen = async (imagen)=>{
        let url = await subirArchivo(imagen)
        return url
    }
    const manejarImagen = (e) => {
        e.preventDefault()    
        let file = e.target.files[0]
        fileImagen = file                   
    }

    return (
        <div>
            <form className="p-2 text-start forShadow" style={{backgroundColor:'#4cc0d9'}} onSubmit={handleSubmit(recibirSubmit)}>
                <div className="pt-2">
                    <label className="form-label my-0 ps-2 fw-bold">Servicio</label>
                    <input type="text" className="form-control" defaultValue={servicio.nombre} {...register("nombre", { required: true })}/>                                        
                </div>
                <div className="pt-2">
                    <label className="form-label my-0 ps-2 fw-bold">Precio</label>
                    <input type="number" className="form-control" defaultValue={servicio.precio} {...register("precio", { required: true })}/>
                </div>                
                <div className="pt-2">
                    <label className="form-label my-0 ps-2 fw-bold">Foto</label>
                    {loadI ? (<small className="ps-5 text-danger fw-bold blink">Cargando foto.....</small>) : ("")}                                      
                    <input type="file" className="form-control" style={{fontSize:'12px'}} onChange={(e)=>{manejarImagen(e)}}/>                    
                    <input type="text" className="form-control p-0" style={{fontSize:'12px',pointerEvents:'none'}} defaultValue={servicio.foto} {...register("foto")}/>
                </div>                                
                <div className="pt-2">
                    <label className="form-label my-0 ps-2 fw-bold">Descripcion</label>
                    <textarea className="form-control p-1" rows="2" defaultValue={servicio.descripcion} {...register("descripcion")}></textarea>                                                    
                </div>
                <div className="text-center my-3">
                    <button type="submit" className={`btn ${btnClass} fw-bold px-3 me-2`}>{btnText}</button>
                    <button type="reset" className="btn btn-danger fw-bold px-3 ms-2" onClick={(e)=>{cancelar(e)}}>Cancelar</button>
                </div>                
            </form>
        </div>
    )
}

export default FormServicio
