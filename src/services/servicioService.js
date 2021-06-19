import axios from "axios"
import fire, {storage} from "../config/Firebase"

const URL = `${process.env.REACT_APP_URL_API}/servicio`

const obtenerServicios = async()=>{
    try {
        let {data}=await axios.get(URL)        
        return data
    } catch (error) {
        throw error
    }
}

const obtenerServicioPorId = async(id)=>{
    try {
        let {data}=await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const crearServicio = async(nuevoServicio)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.post(URL, nuevoServicio, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const editarServicio = async(servicioEditado, id)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, servicioEditado, {headers})
        return data
    } catch (error) {
        throw error
    }
}

// const eliminarServicio = async(id)=>{
//     try {
//         let {data}=await axios.delete(`${URL}/${id}`)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

const subirArchivo = (imagen) => {
    return new Promise((resolve, reject) => {
        let refStorage = storage.ref(`fotos/${imagen.name}`)
        let tareaSubida = refStorage.put(imagen);
        //comenzamos a escuchar
        tareaSubida.on("state_changed",
            //escuchar el progreso
            ()=>{},
            //manejar errores
            (error)=>{reject(error)},
            //me da la URL de descarga
            ()=>{
                tareaSubida.snapshot.ref.getDownloadURL()
                .then((urlImagen)=>{
                    resolve(urlImagen)
                })
            }
        )
    })
}

export{
    obtenerServicios,
    obtenerServicioPorId,
    crearServicio,
    editarServicio,
    subirArchivo
}