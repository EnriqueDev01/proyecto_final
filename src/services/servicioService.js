import axios from "axios"

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

export{
    obtenerServicios,
    obtenerServicioPorId,
    crearServicio,
    editarServicio
}