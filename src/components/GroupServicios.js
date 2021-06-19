import React from 'react'

function GroupServicios({servicios, manejarBoton}) {
    return (
        <div className="container-fluid">
            <div className="row">
                {servicios.map((serv, i) => (
                    <div className="col-3" key={i}>
                        <div className="card mb-4" style={{height:'260px',borderRadius:"10px",boxShadow:"5px 5px 10px gray"}}>
                            <div className="p-0" style={{height:'190px',borderRadius:"10px"}}>
                                <img className="card-img-top m-0" src={serv.foto} style={{height:"190px",objectFit:"cover"}} alt="imagen" />
                            </div>                            
                            <div className="card-body p-1">
                                <h6 className="card-title fw-lighter">{serv.nombre}</h6>
                                <span className="fw-bold me-2">S/ {serv.precio}</span>
                                <button className="btn btn-outline-warning btn-sm fw-bold ms-5" onClick={(e)=>{manejarBoton(e,"editar",serv)}}>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}

export default GroupServicios
