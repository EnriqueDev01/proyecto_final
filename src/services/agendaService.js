import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API}/agenda`

const obtenerAgendas = async()=>{
    try {
        let {data}=await axios.get(URL)        
        return data
    } catch (error) {
        throw error
    }
}

const obtenerAgendaPorId = async(id)=>{
    try {
        let {data}=await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        throw error
    }
}

const crearAgenda = async(nuevaAgenda)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.post(URL, nuevaAgenda, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const editarAgenda = async(agendaEditada, id)=>{
    try {
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, agendaEditada, {headers})
        console.log("data_editada",data)
        return data
    } catch (error) {
        throw error
    }
}

// const eliminarAgenda = async(id)=>{
//     try {
//         let {data}=await axios.delete(`${URL}/${id}`)
//         return data
//     } catch (error) {
//         throw error
//     }
// }

export{
    obtenerAgendas,
    obtenerAgendaPorId,
    crearAgenda,
    editarAgenda
}