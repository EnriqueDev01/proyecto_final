import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API}/estilista`

const obtenerEstilistas = async()=>{
    try {
        let {data}=await axios.get(URL)        
        return data
    } catch (error) {
        throw error
    }
}

const obtenerEstilistaPorId = async(id)=>{
    try {
        let {data}=await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const crearEstilista = async(nuevoEstilista)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.post(URL, nuevoEstilista, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const editarEstilista = async(estilistaEditado, id)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, estilistaEditado, {headers})
        return data
    } catch (error) {
        throw error
    }
}

// const eliminarEstilista = async(id)=>{
//     try {
//         let {data}=await axios.delete(`${URL}/${id}`)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

export{
    obtenerEstilistas,
    obtenerEstilistaPorId,
    crearEstilista,
    editarEstilista
}